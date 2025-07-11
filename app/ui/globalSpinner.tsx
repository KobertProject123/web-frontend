import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

export function GlobalSpinner() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </div>
  );
}
