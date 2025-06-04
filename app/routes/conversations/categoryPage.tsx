import type { Route } from "./+types/page";
import { fakeApi } from "~/data/api";
import ConversationInfoList from "~/ui/conversation/categoryCollapse";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fakeApi.getData();
  const data = await res.json();
  return data;
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <ConversationInfoList />
    </div>
  );
}
