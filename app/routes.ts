import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/layout.tsx", [
    route("conversations", "routes/conversations/categoryPage.tsx"),
    route("inspect/:utteranceId", "routes/conversations/inspectPage.tsx"),
  ]),
] satisfies RouteConfig;
