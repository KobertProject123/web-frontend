// fakeApi.ts

export type Titles = {
  titles: string[];
};

export type utterances = {
  persona_id: number;
  text: string;
  intimacy: number;
}[];

export const fakeApi2 = {
  async fetch(id: number) {
    if (id === 1) {
      return {
        json: async () => ({
          title: "Sample Title",
          utterances: [
            {
              persona_id: 125,
              text: "conversation by id",
              intimacy: 3,
            },
            {
              persona_id: 125,
              text: "conversation by id",
              intimacy: 1,
            },
            {
              persona_id: 125,
              text: "conversation by id",
              intimacy: 2,
            },
          ],
        }),
      };
    } else {
      return {
        json: async () => ({
          title: "Sample Title",
          utterances: [
            {
              persona_id: 125,
              text: "conversation 1 conversation 1 conversation 1 conversation 1 conversation 1 conversation 1 conversation 1",
              intimacy: 3,
            },
          ],
        }),
      };
    }
  },
};

export const fakeApi = {
  async getData() {
    const mockResponse = {
      json: async () => ({
        title: "Sample Title",
        utterances: [
          {
            persona_id: 125,
            text: "conversation 1 conversation 1 conversation 1 conversation 1 conversation 1 conversation 1 conversation 1",
            intimacy: 3,
          },
          {
            persona_id: 123,
            text: "conversation 2",
            intimacy: 1,
          },
          {
            persona_id: 125,
            text: "conversation 3",
            intimacy: 5,
          },
          {
            persona_id: 123,
            text: "conversation 4",
            intimacy: 1,
          },
          {
            persona_id: 125,
            text: "conversation 5",
            intimacy: 2,
          },
          {
            persona_id: 125,
            text: "conversation 5",
            intimacy: 2,
          },
          {
            persona_id: 125,
            text: "conversation 5",
            intimacy: 2,
          },
          {
            persona_id: 125,
            text: "conversation 5",
            intimacy: 2,
          },
          {
            persona_id: 125,
            text: "conversation 5",
            intimacy: 2,
          },
          {
            persona_id: 125,
            text: "conversation 5",
            intimacy: 2,
          },
          {
            persona_id: 125,
            text: "conversation 5",
            intimacy: 2,
          },
          {
            persona_id: 125,
            text: "conversation 5",
            intimacy: 2,
          },
        ],
      }),
    };

    return mockResponse;
  },
};
