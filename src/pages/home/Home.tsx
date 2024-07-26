import React from "react";
import LayoutSchema from "../../components/layout/Layout";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const dataEntryType = [
  { name: "New Case", value: 50 },
  { name: "Recurrent", value: 20 },
  { name: "Re-entry after abandonment", value: 10 },
  { name: "Transfer in", value: 10 },
  { name: "Unspecified", value: 10 }
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
      <h1>Home</h1>
      <h2>Disease Notifications</h2>
      
      <h3>Entry Type</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={dataEntryType}
          cx={200}
          cy={200}
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
      
      <h3>Form</h3>
      <BarChart width={600} height={300} data={dataForm}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      
      <h3>Diagnosis</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={dataDiagnosis}
          cx={200}
          cy={200}
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
      
      <h3>Culture</h3>
      <BarChart width={600} height={300} data={dataCulture}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </LayoutSchema>
  );
};

export default Home;
