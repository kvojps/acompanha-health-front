import React from "react";
import { Layout, Row, Col, Card } from "antd";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import LayoutSchema from "../../components/layout/Layout";

const { Content } = Layout;

const dataEntryType = [
  { name: "Novo caso", value: 50 },
  { name: "Recorrente", value: 20 },
  { name: "Reentrada após abandono", value: 10 },
  { name: "Transferência", value: 10 },
  { name: "Desconhecido", value: 10 }
];

const dataForm = [
  { name: "Pulmonar", value: 60 },
  { name: "Extra Pulmonar", value: 30 },
  { name: "Ambos", value: 10 }
];

const dataDiagnosis = [
  { name: "Positivo", value: 50 },
  { name: "Negativo", value: 20 },
  { name: "Não realizado", value: 30 }
];

const dataCulture = [
  { name: "Positivo", value: 50 },
  { name: "Negativo", value: 20 },
  { name: "Em progresso", value: 10 },
  { name: "Não realizado", value: 10 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384"];

const Home: React.FC = () => {
  return (
    <LayoutSchema>
      <Content style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '36px', color: '#1890ff' }}>
            Panorama Geral da Tuberculose no AcompanhaHealth
          </h1>
          <p style={{ fontSize: '18px', color: '#555' }}>
            Visualização detalhada dos dados de notificação de tuberculose
          </p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Tipo de entrada">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
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
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Forma">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataForm}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Diagnóstico">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
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
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Cultura">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataCulture}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>
      </Content>
    </LayoutSchema>
  );
};

export default Home;
