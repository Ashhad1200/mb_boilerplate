import React from "react";
import { Card } from "antd";
import { Divider } from "antd";
// import
const CardStructure = (props) => {
  const { userData } = props;
  const Style = {
    width: "100%",
    textAlign: "center",
    // marginbottom: "10px"
  };

  // console.log(userData);
  return (
    <>
      <Card title={userData.name} style={Style}>
        <Card.Grid>
          <li>
            <b>COMPANY</b>: {userData.company.name}
          </li>
        </Card.Grid>
        <Card.Grid>
          <li>
            <b>NAME</b>: {userData.name}
          </li>
        </Card.Grid>
        <Card.Grid>
          <li>
            <b>USERNAME</b>: {userData.username}
          </li>
        </Card.Grid>
        <Card.Grid>
          <li>
            <b>EMAIL</b>: {userData.email}
          </li>
        </Card.Grid>
        <Card.Grid>
          <li>
            <b>PHONE</b>: {userData.phone}
          </li>
        </Card.Grid>
        <Card.Grid>
          <li>
            <b>WEBSITE</b>: {userData.website}
          </li>
        </Card.Grid>
        <Card.Grid>
          <li>
            <b>ADDRESS/CITY</b>: {userData.address.city}
          </li>
        </Card.Grid>
        <Card.Grid>
          <li>
            <b>STREET</b>: {userData.address.street}
          </li>
        </Card.Grid>
        <Card.Grid>
          <li>
            <b>ZIPCODE</b>: {userData.address.zipcode}
          </li>
        </Card.Grid>
      </Card>

      <Divider></Divider>
    </>
  );
};

export default CardStructure;
