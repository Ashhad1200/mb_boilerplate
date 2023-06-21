import React from "react";
import IntlMessages from "util/IntlMessages";
// import Greetings from "components/dashboard/Greetings";
import CardsStyle2 from "./cardData";
import { Col, Row } from "antd";

const Card2 = () => {
  return (
    <>
      <h2 className="title gx-mb-4">
        {/* <IntlMessages id="sidebar.samplePage" /> */}
        <IntlMessages id="sidebar.cardstyle2" />
      </h2>

      <div className="gx-d-flex justify-content-center">
        {/* <h4>Happy Coding! From Ashhad 2</h4> */}
        {/* <Greetings/> */}
        <Row gutter={[8,8,8]}>
          <Col
            xl={16}
            lg={16}
            md={16}
            sm={{ span: 24, order: 1 }}
            xs={{ span: 24, order: 1 }}
          ></Col>
          <Col
            xl={8}
            lg={8}
            md={8}
            sm={{ span: 24, order: 3 }}
            xs={{ span: 24, order: 2 }}
          ></Col>
          <Col
            lg={16}
            md={16}
            sm={{ span: 24, order: 3 }}
            xs={{ span: 24, order: 2 }}
          ></Col>

          <Col
            xl={8}
            lg={8}
            md={8}
            sm={{ span: 24, order: 3 }}
            xs={{ span: 24, order: 3 }}
          ></Col>
          <Col
            xl={24}
            lg={24}
            md={24}
            sm={{ span: 24, order: 3 }}
            xs={{ span: 24, order: 4 }}
          ></Col>
          <CardsStyle2 />
        </Row>
      </div>
    </>
  );
};

export default Card2;
