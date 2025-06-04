import { fakeApi2 } from "~/data/api";
import type { Route } from "./+types/inspectPage";
import ConversationList from "~/ui/conversation/inspect/conversations";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fakeApi2.fetch(Number(params.utteranceId));
  const data = await res.json();
  return data;
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <ConversationList data={loaderData} />
    </div>
  );
}
