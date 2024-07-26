import React, { useState } from "react";
import { Table, Button, Space, Modal, Form, Input, Select, Tag } from "antd";
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import LayoutSchema from "../../components/layout/Layout";
import dataSource from "./NotificationMockData"; // Importando os dados mock

const { Option } = Select;

const Notification: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentNotification, setCurrentNotification] = useState<any>(null);
  const [notifications, setNotifications] = useState(dataSource);

  const columns = [
    {
      title: "Registro médico",
      dataIndex: "medical_record",
      key: "medical_record",
      sorter: (a: any, b: any) => a.medical_record.localeCompare(b.medical_record),
    },
    {
      title: "Nome do Paciente",
      dataIndex: "patient_name",
      key: "patient_name",
      sorter: (a: any, b: any) => a.patient_name.localeCompare(b.patient_name),
    },
    {
      title: "Tipo de entrada",
      dataIndex: "entry_type",
      key: "entry_type",
      filters: [
        { text: "Consulta", value: "Consulta" },
        { text: "Exame", value: "Exame" },
        { text: "Internação", value: "Internação" },
      ],
      onFilter: (value: any, record: any) => record.entry_type.includes(value),
    },
    {
      title: "População especial",
      dataIndex: "special_population",
      key: "special_population",
      filters: [
        { text: "Nenhum", value: "Nenhum" },
        { text: "Gestante", value: "Gestante" },
        { text: "Criança", value: "Criança" },
        { text: "Idoso", value: "Idoso" },
      ],
      onFilter: (value: any, record: any) => record.special_population.includes(value),
    },
    {
      title: "É beneficiário do governo",
      dataIndex: "is_government_beneficiary",
      key: "is_government_beneficiary",
      render: (text: any) => (
        <Tag color={text === "Sim" ? "green" : "red"}>{text}</Tag>
      ),
    },
    {
      title: "Forma",
      dataIndex: "form",
      key: "form",
    },
    {
      title: "Tipo extra pulmonar",
      dataIndex: "extra_pulmonary_type",
      key: "extra_pulmonary_type",
    },
    {
      title: "Diagnóstico",
      dataIndex: "diagnosis",
      key: "diagnosis",
      render: (text: any) => (
        <Tag color={text === "Positivo" ? "green" : "red"}>{text}</Tag>
      ),
    },
    {
      title: "Cultura",
      dataIndex: "culture",
      key: "culture",
      render: (text: any) => (
        <Tag color={text === "Positivo" ? "green" : "red"}>{text}</Tag>
      ),
    },
    {
      title: "Unidade de saúde",
      dataIndex: "health_unit",
      key: "health_unit",
      filters: [
        { text: "Unidade A", value: "Unidade A" },
        { text: "Unidade B", value: "Unidade B" },
        { text: "Unidade C", value: "Unidade C" },
        { text: "Unidade D", value: "Unidade D" },
      ],
      onFilter: (value: any, record: any) => record.health_unit.includes(value),
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

  const handleAddNotification = () => {
    setCurrentNotification(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record: any) => {
    setCurrentNotification(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record: any) => {
    setCurrentNotification(record);
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
        if (currentNotification) {
          const updatedNotifications = notifications.map((notification) =>
            notification.medical_record === currentNotification.medical_record
              ? { ...notification, ...values }
              : notification
          );
          setNotifications(updatedNotifications);
        } else {
          setNotifications([...notifications, values]);
        }
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleDeleteConfirm = () => {
    const updatedNotifications = notifications.filter(
      (notification) =>
        notification.medical_record !== currentNotification.medical_record
    );
    setNotifications(updatedNotifications);
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
        <h1>Todas as Notificações</h1>
        <Button
          type="primary"
          onClick={handleAddNotification}
          icon={<UserAddOutlined />}
        >
          Adicionar Notificação
        </Button>
      </Space>
      <Table
        dataSource={notifications}
        columns={columns}
        rowKey="medical_record"
      />
      <Modal
        title={
          currentNotification ? "Editar Notificação" : "Adicionar Notificação"
        }
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Salvar"
        cancelText="Cancelar"
      >
        <Form form={form} layout="vertical" name="notification_form">
          <Form.Item
            name="medical_record"
            label="Registro médico"
            rules={[
              {
                required: true,
                message: "Por favor, insira o registro médico!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="patient_name"
            label="Nome do Paciente"
            rules={[
              {
                required: true,
                message: "Por favor, insira o nome do paciente!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="entry_type"
            label="Tipo de entrada"
            rules={[
              {
                required: true,
                message: "Por favor, selecione o tipo de entrada!",
              },
            ]}
          >
            <Select>
              <Option value="Consulta">Consulta</Option>
              <Option value="Exame">Exame</Option>
              <Option value="Internação">Internação</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="special_population"
            label="População especial"
            rules={[
              {
                required: true,
                message: "Por favor, selecione a população especial!",
              },
            ]}
          >
            <Select>
              <Option value="Nenhum">Nenhum</Option>
              <Option value="Gestante">Gestante</Option>
              <Option value="Criança">Criança</Option>
              <Option value="Idoso">Idoso</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="is_government_beneficiary"
            label="É beneficiário do governo"
            rules={[
              {
                required: true,
                message: "Por favor, selecione se é beneficiário do governo!",
              },
            ]}
          >
            <Select>
              <Option value="Sim">Sim</Option>
              <Option value="Não">Não</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="form"
            label="Forma"
            rules={[{ required: true, message: "Por favor, insira a forma!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="extra_pulmonary_type"
            label="Tipo extra pulmonar"
            rules={[
              {
                required: true,
                message: "Por favor, insira o tipo extra pulmonar!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="diagnosis"
            label="Diagnóstico"
            rules={[
              { required: true, message: "Por favor, insira o diagnóstico!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="culture"
            label="Cultura"
            rules={[
              { required: true, message: "Por favor, insira a cultura!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="health_unit"
            label="Unidade de saúde"
            rules={[
              {
                required: true,
                message: "Por favor, insira a unidade de saúde!",
              },
            ]}
          >
            <Input />
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
        <p>Tem certeza de que deseja excluir esta notificação?</p>
      </Modal>
    </LayoutSchema>
  );
};

export default Notification;
