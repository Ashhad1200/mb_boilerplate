import React from "react";
import { Card } from "antd";

const CardStructure = (props) => {
  const { user } = props;
  // console.log(user);
  return (
    <div className="gx-d-flex justify-content-center">
      <Card
        title={user.name}
        bordered={true}
        style={{
          width: 350,
          marginBottom: 10,
          marginRight: 10,
        }}
      >
        <ul>
          <li>{user.name}</li>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.phone}</li>
          <li>{user.website}</li>
        </ul>
      </Card>
    </div>
  );
};

export default CardStructure;
