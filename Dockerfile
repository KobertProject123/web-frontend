FROM node:20-alpine AS development-dependencies-env
RUN apk add --no-cache python3 make g++ cairo-dev jpeg-dev pango-dev giflib-dev
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:20-alpine AS production-dependencies-env
RUN apk add --no-cache python3 make g++ cairo-dev jpeg-dev pango-dev giflib-dev
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:20-alpine

RUN apk add --no-cache \
    cairo \
    jpeg \
    pango \
    giflib \
    librsvg \
    pixman
    
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["npm", "run", "start"]