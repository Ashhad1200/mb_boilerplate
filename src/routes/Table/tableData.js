import React, { useState, useEffect } from "react";
import userService from "../../appServices/userService.js";
import Medium from "../../components/dashboard/greetings.loader.js";
// import TableStructure from "./tableStructure.js";
import { Table } from "antd";

const TableData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await userService.getUser();
      setUser(data);
    };

    fetchData();
  });

  if (user === null || user.length < 1) {
    return (
      <div>
        {/* <h1>Loading....</h1> */}
        <Medium />
      </div>
    );
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: user.name,
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: (text) => <a>{text}</a>,
    },
    {
      title: "UserName",
      dataIndex: "username",
      key: user.username,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: user.email,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: user.phone,
    },
    {
      title: "Website",
      dataIndex: "website",
      key: user.website,
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={user} />
    </div>
  );
};

export default TableData;
