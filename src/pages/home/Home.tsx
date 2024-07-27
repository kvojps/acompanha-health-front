import React from "react";
import { Layout, Row, Col, Card } from "antd";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import LayoutSchema from "../../components/layout/Layout";

const { Content } = Layout;

const dataEntryType = [
  { name: "Novo caso", value: 50 },
  { name: "Recorrente", value: 20 },
  { name: "Após abandono", value: 10 },
  { name: "Transferência", value: 10 },
  { name: "Desconhecido", value: 10 }
];

const dataForm = [
  { name: "Pulmonary", value: 60 },
  { name: "Extra Pulmonary", value: 30 },
  { name: "Both", value: 10 }
];

const dataDiagnosis = [
  { name: "Positive", value: 50 },
  { name: "Negative", value: 20 },
  { name: "Not Done", value: 30 }
];

const dataCulture = [
  { name: "Positive", value: 50 },
  { name: "Negative", value: 20 },
  { name: "In Progress", value: 10 },
  { name: "Not Done", value: 10 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384"];

const Home: React.FC = () => {
  return (
    <LayoutSchema>
      <Content style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <Card title="Entry Type">
              <PieChart width={300} height={300}>
                <Pie
                  data={dataEntryType}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name }) => name}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataEntryType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <Card title="Form">
              <BarChart width={300} height={300} data={dataForm}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <Card title="Diagnosis">
              <PieChart width={300} height={300}>
                <Pie
                  data={dataDiagnosis}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name }) => name}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataDiagnosis.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <Card title="Culture">
              <BarChart width={300} height={300} data={dataCulture}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </Card>
          </Col>
        </Row>
      </Content>
    </LayoutSchema>
  );
};

export default Home;
