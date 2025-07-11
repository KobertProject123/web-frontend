import { getUtternaces } from "~/data/api";
import type { Route } from "./+types/inspectPage";
import ConversationList from "~/ui/conversation/inspect/conversations";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  console.log(params);
  const data = await getUtternaces(params["utteranceId"]);
  return data;
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <ConversationList data={loaderData} />
    </div>
  );
}
