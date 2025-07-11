// fakeApi.ts

const AI_API_BASE_URL = "localhost:8000";

export type Titles = {
  titles: string[];
};

export type utterances = {
  utterance_id: string;
  persona_id: number;
  text: string;
  terminate: boolean;
  forward_intimacy: number;
  backward_intimacy: number;
}[];

export async function getCategories() {
  return [
    { category_id: "가족" },
    { category_id: "반려동물" },
    { category_id: "식음료" },
    { category_id: "연애/결혼" },
    { category_id: "여가,오락" },
  ];
}

export async function getUtternaces(conversationId: string) {
  try {
    const response = await fetch(
      `http://${AI_API_BASE_URL}/conversation/ai?conversation_id=${conversationId}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      console.log(response);
      return undefined;
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getConversations(categoryId: string) {
  return {
    index: 0,
    max: 3,
    conversations: [
      {
        conversation_id: "BP22000032",
        category_id: "연애/결혼",
        personas: [
          {
            persona_id: 118,
            profile_minors: ["여", "20대"],
          },
          {
            persona_id: 18,
            profile_minors: ["남", "30대"],
          },
        ],
      },
      {
        conversation_id: "BP22000032",
        category_id: "연애/결혼",
        personas: [
          {
            persona_id: 118,
            profile_minors: ["여", "20대"],
          },
          {
            persona_id: 18,
            profile_minors: ["남", "30대"],
          },
        ],
      },
      {
        conversation_id: "BP22000032",
        category_id: "연애/결혼",
        personas: [
          {
            persona_id: 118,
            profile_minors: ["여", "20대"],
          },
          {
            persona_id: 18,
            profile_minors: ["남", "30대"],
          },
        ],
      },
    ],
  };
}
