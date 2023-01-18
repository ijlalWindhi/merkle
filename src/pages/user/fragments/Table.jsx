import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { Table } from "antd";
import { Edit } from "react-feather";
import ActionButton from "./ActionButton";
const columns = [
  {
    title: "Name",
    width: "20%",
    dataIndex: "name",
    render: (item) => (
      <Text>
        {item.firstname} {item.lastname}
      </Text>
    ),
  },
  {
    title: "Username",
    width: "20%",
    dataIndex: "username",
  },
  {
    title: "Email",
    width: "20%",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    width: "20%",
  },
  {
    title: "Aksi",
    render: (item) => <ActionButton payload={item} />,
  },
];

export default function TableCompo({ data }) {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      scroll={{
        x: 1300,
      }}
    />
  );
}
