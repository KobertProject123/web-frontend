import { Outlet } from "react-router";
import { Layout } from "antd";
import TopNav from "~/ui/topNav";

const { Header, Content, Footer } = Layout;

export default function PageLayout() {
  return (
    <>
      <Layout>
        <Header style={{ padding: 0 }}>
          <TopNav />
        </Header>
        <Content>
          <div className="bg-white pt-6">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </>
  );
}
