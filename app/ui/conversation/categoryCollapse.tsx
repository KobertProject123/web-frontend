import type { CollapseProps, TableProps } from "antd";
import { Card, Collapse, Space, Table, Tag } from "antd";
import { CategoryTable, type UtterancesInCategory } from "./categoryTable";

const categories = ["카테고리 1", "카테고리 2", "카테고리 3"];

const items: CollapseProps["items"] = categories.map((category, index) => ({
  key: index,
  label: category,
  children: <CategoryTable items={filterItems(category)} />,
}));

export default function ConversationInfoList() {
  return (
    <div className="flex justify-center items-center">
      <Card title="발화 정보" className="w-2/3">
        <Collapse items={items} />
      </Card>
    </div>
  );
}

function filterItems(category: string): UtterancesInCategory {
  return {
    category: "카테고리 1",
    utterances: [
      {
        title: "제목 1",
        id: "1",
        personas: ["페르소나 1", "페르소나 2"],
        length: 10,
      },
      {
        title: "제목 2",
        id: "2",
        personas: ["페르소나 3", "페르소나 4"],
        length: 5,
      },
      {
        title: "제목 3",
        id: "3",
        personas: ["페르소나 5", "페르소나 6"],
        length: 11,
      },
    ],
  };
}
