import {
  DeleteOutlined,
  EditOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import moment from "moment";
import React, { useState } from "react";
import LayoutSchema from "../../components/layout/Layout";
import dataSource from "./PatientMockData";

const { Option } = Select;

const Patient: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentPatient, setCurrentPatient] = useState<any>(null);
  const [patients, setPatients] = useState(dataSource);

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "CNS",
      dataIndex: "cns",
      key: "cns",
    },
    {
      title: "Data de Nascimento",
      dataIndex: "birthDate",
      key: "birthDate",
      render: (date: any) => moment(date).format("DD/MM/YYYY"),
    },
    {
      title: "Sexo",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Estágio da Gravidez",
      dataIndex: "pregnancyStage",
      key: "pregnancyStage",
    },
    {
      title: "Raça",
      dataIndex: "race",
      key: "race",
    },
    {
      title: "Escolaridade",
      dataIndex: "educationLevel",
      key: "educationLevel",
    },
    {
      title: "Nome da Mãe",
      dataIndex: "motherName",
      key: "motherName",
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

  const handleAddPatient = () => {
    setCurrentPatient(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record: any) => {
    setCurrentPatient(record);
    form.setFieldsValue({
      ...record,
      birthDate: moment(record.birthDate),
    });
    setIsModalVisible(true);
  };

  const handleDelete = (record: any) => {
    setCurrentPatient(record);
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
        if (currentPatient) {
          const updatedPatients = patients.map((patient) =>
            patient.cns === currentPatient.cns
              ? { ...patient, ...values }
              : patient
          );
          setPatients(updatedPatients);
        } else {
          setPatients([...patients, { ...values, cns: Date.now().toString() }]);
        }
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleDeleteConfirm = () => {
    const updatedPatients = patients.filter(
      (patient) => patient.cns !== currentPatient.cns
    );
    setPatients(updatedPatients);
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
        <h1>Todos os pacientes</h1>
        <Button
          type="primary"
          onClick={handleAddPatient}
          icon={<MedicineBoxOutlined />}
        >
          Adicionar Paciente
        </Button>
      </Space>
      <Table dataSource={patients} columns={columns} rowKey="cns" />
      <Modal
        title={currentPatient ? "Editar Paciente" : "Adicionar Paciente"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Salvar"
        cancelText="Cancelar"
      >
        <Form form={form} layout="vertical" name="patient_form">
          <Form.Item
            name="name"
            label="Nome"
            rules={[{ required: true, message: "Por favor, insira o nome!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="cns"
            label="CNS"
            rules={[{ required: true, message: "Por favor, insira o CNS!" }]}
            hidden={!!currentPatient}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="birthDate"
            label="Data de Nascimento"
            rules={[
              {
                required: true,
                message: "Por favor, insira a data de nascimento!",
              },
            ]}
          >
            <DatePicker format="DD/MM/YYYY" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Sexo"
            rules={[
              { required: true, message: "Por favor, selecione o sexo!" },
            ]}
          >
            <Select>
              <Option value="Masculino">Masculino</Option>
              <Option value="Feminino">Feminino</Option>
              <Option value="Outro">Outro</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="pregnancyStage"
            label="Estágio da Gravidez"
            rules={[
              {
                required: true,
                message: "Por favor, selecione o estágio da gravidez!",
              },
            ]}
          >
            <Select>
              <Option value="Primeiro trimestre">Primeiro trimestre</Option>
              <Option value="Segundo trimestre">Segundo trimestre</Option>
              <Option value="Terceiro trimestre">Terceiro trimestre</Option>
              <Option value="N/A">N/A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="race"
            label="Raça"
            rules={[
              { required: true, message: "Por favor, selecione a raça!" },
            ]}
          >
            <Select>
              <Option value="Branco">Branco</Option>
              <Option value="Preto">Preto</Option>
              <Option value="Pardo">Pardo</Option>
              <Option value="Amarelo">Amarelo</Option>
              <Option value="Indígena">Indígena</Option>
              <Option value="Outro">Outro</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="educationLevel"
            label="Escolaridade"
            rules={[
              {
                required: true,
                message: "Por favor, selecione a escolaridade!",
              },
            ]}
          >
            <Select>
              <Option value="Fundamental Incompleto">
                Fundamental Incompleto
              </Option>
              <Option value="Fundamental Completo">Fundamental Completo</Option>
              <Option value="Médio Incompleto">Médio Incompleto</Option>
              <Option value="Médio Completo">Médio Completo</Option>
              <Option value="Superior Incompleto">Superior Incompleto</Option>
              <Option value="Superior Completo">Superior Completo</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="motherName"
            label="Nome da Mãe"
            rules={[
              { required: true, message: "Por favor, insira o nome da mãe!" },
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
        <p>Você tem certeza que deseja excluir este paciente?</p>
      </Modal>
    </LayoutSchema>
  );
};

export default Patient;
