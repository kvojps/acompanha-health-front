import { Layout } from "antd";
import React from "react";
import Navigation from "../../components/navigation/Navigation";

const { Header, Content, Footer } = Layout;

interface LayoutSchemaProps {
  children: React.ReactNode;
}

const LayoutSchema: React.FC<LayoutSchemaProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navigation />
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "16px" }}>{children}</Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#434343",
            color: "#fff",
            borderTop: "4px solid #1677ff",
          }}
        >
          AcompanhaHealth © 2024
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutSchema;
