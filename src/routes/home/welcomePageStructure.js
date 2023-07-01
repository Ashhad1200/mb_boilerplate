import React from "react";
import { Layout, Typography } from "antd";
import DancingWords from "./DancingWords";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const WelcomePage = () => {
  return (
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#ffffff", padding: 24, minHeight: 280 }}>
          <Title level={4}>Hello, User!</Title>
          <Paragraph>Welcome to the React World.</Paragraph>
          <DancingWords />
        </div>
      </Content>
    </Layout>
  );
};

export default WelcomePage;
