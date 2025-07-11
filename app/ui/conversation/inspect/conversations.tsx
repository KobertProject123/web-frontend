import { Card, type CollapseProps } from "antd";
import { useState } from "react";
import Utterances from "./utterances";
import Graph from "./graph";
import type { utterances } from "~/data/api";
import { DownOutlined, LeftOutlined, UpOutlined } from "@ant-design/icons";

export default function ConversationList({
  data,
}: {
  data: { conversation_id: string; utterances: utterances };
}) {
  const { conversation_id, utterances } = data;
  const [utteranceIdx, setUtteranceIdx] = useState(0);

  return (
    <div className="bg-white flex justify-center items-center overflow-auto">
      <div className="flex w-4/5">
        <Card title="발화 정보" className="grow-3 max-w-1/2">
          <div
            className="flex justify-center h-7 move-up"
            onClick={() => {
              if (utteranceIdx > 0) setUtteranceIdx(utteranceIdx - 1);
            }}
          >
            <UpOutlined />
          </div>
          <div className="max-h-96 overflow-auto">
            <Utterances
              onSelect={(idx: number) => setUtteranceIdx(idx)}
              utterances={utterances}
              selectedIdx={utteranceIdx}
            />
          </div>
          <div
            className="flex justify-center h-7 move-down"
            onClick={() => {
              if (utterances.length - 2 > utteranceIdx)
                setUtteranceIdx(utteranceIdx + 1);
            }}
          >
            <DownOutlined />
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
