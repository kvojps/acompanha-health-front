import React from "react";
import { Table, Tag } from "antd";
import dataSource from "./UserMockData";
import LayoutSchema from "../../components/layout/Layout";

const User: React.FC = () => {
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Perfil",
      dataIndex: "profile",
      key: "profile",
      render: (profile: string) => {
        let color = "blue";
        if (profile === "Administrador") {
          color = "red";
        } else if (profile === "Secretaria") {
          color = "yellow";
        } else if (profile === "Profissional de saúde") {
          color = "green";
        }
        return (
          <Tag color={color} key={profile}>
            {profile}
          </Tag>
        );
      },
    },
    {
      title: "Data de criação",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Data de atualização",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
  ];

  return (
    <LayoutSchema>
      <Table dataSource={dataSource} columns={columns} />;
    </LayoutSchema>
  );
};

export default User;
