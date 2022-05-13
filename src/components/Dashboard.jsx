import React from "react";
import DataTable from "./DataTable";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  AreaChartOutlined,
  UserOutlined,
  UploadOutlined,
  FormOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Subir archivo", "1", <UploadOutlined />),
  getItem("Formularios", "2", <FormOutlined />),
  getItem("Reportes", "3", <AreaChartOutlined />),
  getItem("Usuarios", "4", <UserOutlined />),
];

const Dashboard = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible>
        <img className="logo" src="../assets/logo.png" alt="logo" />

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <DataTable />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Rabbit 2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
