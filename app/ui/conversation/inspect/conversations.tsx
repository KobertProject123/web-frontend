import { Card, type CollapseProps } from "antd";
import { useState } from "react";
import Utterances from "./utterances";
import Graph from "./graph";
import type { utterances } from "~/data/api";

export default function ConversationList({
  data,
}: {
  data: { title: string; utterances: utterances };
}) {
  const { title, utterances } = data;
  const [utteranceIdx, setUtteranceIdx] = useState(-1);

  return (
    <div className="bg-white flex justify-center items-center overflow-auto">
      <div className="flex w-4/5">
        <Card title="발화 정보" className="grow-3 max-w-1/2">
          <div className="max-h-96 overflow-auto">
            <Utterances
              onSelect={(idx: number) => setUtteranceIdx(idx)}
              utterances={utterances}
            />
          </div>
        </Card>
        <div className="grow-1" />
        <Card title="차트" className="grow-3">
          <Graph utterances={utterances} selectedIdx={utteranceIdx}></Graph>
        </Card>
      </div>
    </div>
  );
}
