import React from "react";
import LayoutSchema from "../../components/layout/Layout";
import dataSource from "./PatientMockData";
import { Table} from "antd";

const Patient: React.FC = () => {
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
      title: "Data de nascimento",
      dataIndex: "birthDate",
      key: "birthDate",
    },
    {
      title: "Gênero",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Estágio da gravidez",
      dataIndex: "pregnancyStage",
      key: "pregnancyStage",
    },
    {
      title: "Raça",
      dataIndex: "race",
      key: "race",
    },
    {
      title: "Nível de educação",
      dataIndex: "educationLevel",
      key: "educationLevel",
    },
    {
      title: "Nome da mãe",
      dataIndex: "motherName",
      key: "motherName",
    }
  ]

  return (
    <LayoutSchema>
      <Table dataSource={dataSource} columns={columns} />
    </LayoutSchema>
  );
};

export default Patient;
