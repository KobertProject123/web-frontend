import type { CollapseProps, TableProps } from "antd";
import { Card, Collapse, Space, Table, Tag } from "antd";
import { CategoryTable, type UtterancesInCategory } from "./categoryTable";
import { getConversations } from "~/data/api";
import CategoryList from "./categoryList";

export default function ConversationInfoList({ categories }) {
  console.log(categories);
  const items: CollapseProps["items"] = categories.map((category, index) => ({
    key: index,
    label: category,
    children: <CategoryList category_id={category}></CategoryList>,
  }));

  return (
    <div className="flex justify-center items-center">
      <Card title="발화 정보" className="w-2/3">
        <Collapse items={items} />
      </Card>
    </div>
  );
}
