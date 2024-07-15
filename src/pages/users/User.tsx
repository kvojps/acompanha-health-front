import React, { useState } from "react";
import { Table, Tag, Button, Space, Modal, Form, Input, Select } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import dataSource from "./UserMockData";
import LayoutSchema from "../../components/layout/Layout";

const { Option } = Select;

const User: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

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

  const handleAddUser = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values: ", values);
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <LayoutSchema>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <h1>Todos os usuários</h1>
        <Button
          type="primary"
          onClick={handleAddUser}
          icon={<UserAddOutlined />}
        >
          Adicionar Usuário
        </Button>
      </Space>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        title="Adicionar Usuário"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Salvar"
        cancelText="Cancelar"
      >
        <Form form={form} layout="vertical" name="add_user_form">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Por favor, insira o email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Senha"
            rules={[{ required: true, message: "Por favor, insira a senha!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="name"
            label="Nome"
            rules={[{ required: true, message: "Por favor, insira o nome!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="profile"
            label="Perfil"
            rules={[
              { required: true, message: "Por favor, selecione o perfil!" },
            ]}
          >
            <Select>
              <Option value="Administrador">Administrador</Option>
              <Option value="Secretaria">Secretaria</Option>
              <Option value="Profissional de saúde">
                Profissional de saúde
              </Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </LayoutSchema>
  );
};

export default User;
