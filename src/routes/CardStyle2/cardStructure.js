import React from "react";
import { Card } from "antd";

const CardStructure = (props) => {
  const { userData } = props;
  const gridStyle = {
    width: "100%",
    textAlign: "center",
  };
  console.log(userData);
  return (
    <Card title={userData.name} style={gridStyle}>
      <Card.Grid>
        <li><b>COMPANY</b>: {userData.company.name}</li>
      </Card.Grid>
      <Card.Grid>
        <li><b>NAME</b>: {userData.name}</li>
      </Card.Grid>
      <Card.Grid>
        <li><b>USERNAME</b>: {userData.username}</li>
      </Card.Grid>
      <Card.Grid>
        <li><b>EMAIL</b>: {userData.email}</li>
      </Card.Grid>
      <Card.Grid>
        <li><b>PHONE</b>: {userData.phone}</li>
      </Card.Grid>
      <Card.Grid>
        <li><b>WEBSITE</b>: {userData.website}</li>
      </Card.Grid>
      <Card.Grid>
        <li><b>ADDRESS/CITY</b>: {userData.address.city}</li>
      </Card.Grid>
      <Card.Grid>
        <li><b>STREET</b>: {userData.address.street}</li>
      </Card.Grid>
      <Card.Grid>
        <li><b>ZIPCODE</b>: {userData.address.zipcode}</li>
      </Card.Grid>
    </Card>
  );
};

export default CardStructure;
