import type { TableProps } from "antd";
import { Space, Table, Tag } from "antd";
import { Link } from "react-router";

export interface UtterancesInCategory {
  category: string;
  utterances: {
    id: string;
    title: string;
    personas: string[];
    length: number;
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
  const data: DataType[] = items.utterances.map((item, index) => ({
    key: index,
    title: item.title,
    persona_1: item.personas[0],
    persona_2: item.personas[1],
    tag: items.category,
    linkId: item.id,
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
