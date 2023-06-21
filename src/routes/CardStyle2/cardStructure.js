import React from "react";
import { Card } from "antd";

const CardStructure = (props) => {
  const { userData } = props;
  return (
    <div className="gx-d-flex justify-content-center">
         <Card
         key={userData.id}
        title={userData.name}
        bordered={true}
        style={{
          width: 350,
          marginBottom: 10,
          marginRight: 10,
        }}
      >
        <ul>
          <li>{userData.name}</li>
          <li>{userData.username}</li>
          <li>{userData.email}</li>
          <li>{userData.phone}</li>
          <li>{userData.website}</li>
        </ul>
      </Card>
    </div>
  );
};

export default CardStructure;
