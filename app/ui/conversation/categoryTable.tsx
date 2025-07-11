import type { TableProps } from "antd";
import { Space, Table, Tag } from "antd";
import { Link } from "react-router";

export interface UtterancesInCategory {
  index: number;
  max: number;
  conversations: {
    conversation_id: string;
    category_id: string;
    personas: {
      persona_id: number;
      profile_minors: string[];
    }[];
  }[];
}

interface DataType {
  key: number;
  title: string;
  persona_1: string;
  persona_2: string;
  tag: string;
  linkId: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Persona 1",
    dataIndex: "persona_1",
    key: "persona_1",
  },
  {
    title: "Persona 2",
    dataIndex: "persona_2",
    key: "persona_2",
  },
  {
    title: "Tag",
    key: "tag",
    dataIndex: "tag",
    render: (_, { tag }) => (
      <Tag color="geekblue" key={tag}>
        {tag.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Inspect",
    key: "inspect",
    dataIndex: "linkId",
    render: (_, { linkId }) => (
      <Space size="middle">
        <Link to={`/inspect/${linkId}`}>Link To Chart</Link>
      </Space>
    ),
  },
];

export function CategoryTable({ items }: { items: UtterancesInCategory }) {
  const data: DataType[] = items.conversations.map((item, index) => ({
    key: index,
    title: item.conversation_id,
    persona_1: `${item.personas[0]["profile_minors"][0]}, ${item.personas[0]["profile_minors"][1]}`,
    persona_2: `${item.personas[1]["profile_minors"][0]}, ${item.personas[1]["profile_minors"][1]}`,
    tag: item.category_id,
    linkId: item.conversation_id,
  }));
  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        bordered
      />
    </>
  );
}
