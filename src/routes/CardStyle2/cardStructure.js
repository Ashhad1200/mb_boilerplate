import React from "react";
import { Card } from "antd";

const CardStructure = (props) => {
  const { userData } = props;
  const gridStyle = {
    width: "100%",
    // textAlign: "center",
  };
  return (

      <Card title={userData.name} style={gridStyle}>
        <Card.Grid >
          <li>NAME: {userData.name}</li>
        </Card.Grid>
        <Card.Grid >
          <li>USERNAME: {userData.username}</li>
        </Card.Grid>
        <Card.Grid >
          <li>EMAIL: {userData.email}</li>
        </Card.Grid>
        <Card.Grid >
          <li>PHONE: {userData.phone}</li>
        </Card.Grid>
        <Card.Grid >
          <li>WEBSITE: {userData.website}</li>
        </Card.Grid>
      </Card>
  );
};

export default CardStructure;
