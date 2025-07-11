import type { CollapseProps, TableProps } from "antd";
import { Card, Collapse, Space, Table, Tag } from "antd";
import { CategoryTable, type UtterancesInCategory } from "./categoryTable";
import { getConversations } from "~/data/api";
import CategoryList from "./categoryList";

export default function ConversationInfoList({ categories, conversations }) {
  const items: CollapseProps["items"] = categories.map((category, index) => ({
    key: index,
    label: category["category_id"],
    children: <CategoryList></CategoryList>,
  }));

  return (
    <div className="flex justify-center items-center">
      <Card title="발화 정보" className="w-2/3">
        <Collapse items={items} />
      </Card>
    </div>
  );
}
