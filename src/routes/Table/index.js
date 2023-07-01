import React from "react";
import IntlMessages from "util/IntlMessages";
import TableData from "./tableData";
import { Layout, Typography } from "antd";


const Table = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <div>
      <h2 className="title gx-mb-4">
        <IntlMessages id="sidebar.dataTable" />
      </h2>
      <Layout>
      <Content style={{ padding: "0 50px" }}>
      <div style={{ background: "#ffffff", padding: 24, minHeight: 280 }}>

        <TableData/>
      </div>
      </Content>
    </Layout>
    </div>
  );
};

export default Table;