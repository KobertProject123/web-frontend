import type { Route } from "./+types/page";
import { getCategories, getConversations } from "~/data/api";
import ConversationInfoList from "~/ui/conversation/categoryCollapse";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const categories = await getCategories();
  return {
    categories: categories["categories"],
  };
}

export default function Page({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return (
    <div>
      <ConversationInfoList categories={loaderData["categories"]} />
    </div>
  );
}
