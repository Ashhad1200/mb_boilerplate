import React from "react";
import IntlMessages from "util/IntlMessages";
import CardData from "./cardData";
// import { Col, Row } from "antd";
import { Layout, Typography, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const Card1 = () => {
  return (
    <>
      <h2 className="title gx-mb-4">
        {/* <IntlMessages id="sidebar.samplePage" /> */}
        <IntlMessages id="sidebar.cardStyle1" />
      </h2>
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <div style={{ background: "#0D2147", padding: 24, minHeight: 280 ,alignItems:"center",paddingLeft:130 }}>
      <Row gutter={[16,16]}>
            <CardData />
      </Row>
            </div>
          </Content>
        </Layout>
    </>
  );
};

export default Card1;
