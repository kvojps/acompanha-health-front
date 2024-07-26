import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import LayoutSchema from "../../components/layout/Layout";
import dataSource from "./UserMockData";

const { Option } = Select;

const User: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentUser, setCurrentUser] = useState(null);

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
      filters: [
        { text: "Administrador", value: "Administrador" },
        { text: "Secretaria", value: "Secretaria" },
        { text: "Profissional de saúde", value: "Profissional de saúde" },
      ],
      onFilter: (value: any, record: any) => record.profile.includes(value),
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
    {
      title: "Ações",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  const handleAddUser = () => {
    setCurrentUser(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record: any) => {
    setCurrentUser(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record: any) => {
    setCurrentUser(record);
    setIsDeleteModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsDeleteModalVisible(false);
    form.resetFields();
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

  const handleDeleteConfirm = () => {
    console.log("Delete user: ", currentUser);
    setIsDeleteModalVisible(false);
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
        title={currentUser ? "Editar Usuário" : "Adicionar Usuário"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Salvar"
        cancelText="Cancelar"
      >
        <Form form={form} layout="vertical" name="user_form">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Por favor, insira o email!" }]}
          >
            <Input />
          </Form.Item>
          {!currentUser && (
            <Form.Item
              name="password"
              label="Senha"
              rules={[
                { required: true, message: "Por favor, insira a senha!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}
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
      <Modal
        title="Confirmar Exclusão"
        open={isDeleteModalVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleCancel}
        okText="Excluir"
        cancelText="Cancelar"
      >
        <p>Você tem certeza que deseja excluir este usuário?</p>
      </Modal>
    </LayoutSchema>
  );
};

export default User;
