import { Outlet } from "react-router";
import { Layout } from "antd";
import TopNav from "~/ui/topNav";
import { useNavigation } from "react-router";
import { GlobalSpinner } from "~/ui/globalSpinner";

const { Header, Content, Footer } = Layout;

export default function PageLayout() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <Layout>
        <Header style={{ padding: 0 }}>
          <TopNav />
        </Header>
        <Content>
          <div className="bg-white pt-6">
            {isNavigating && <GlobalSpinner />}
            {!isNavigating && <Outlet />}
          </div>
        </Content>
      </Layout>
    </>
  );
}
