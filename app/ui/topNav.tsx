import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  PieChartTwoTone,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "home",
    label: <Link to={`/conversations`}>대화 감정 분석 모델링</Link>,
    icon: <PieChartTwoTone style={{ fontSize: 20 }} />,
  },
];

const TopNav: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="fixed w-screen z-10">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default TopNav;
