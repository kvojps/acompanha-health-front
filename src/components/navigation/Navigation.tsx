import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./Navigation.css";

const { Header } = Layout;

const Navigation: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header className="navbar">
      <div className="logo">
        <p>AcompanhaHealth</p>
      </div>
      <Button className="menu-button" type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        open={visible}
      >
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Tela inicial
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Usuários
          </Menu.Item>
          <Menu.Item key="3" icon={<MedicineBoxOutlined />}>
            Pacientes
          </Menu.Item>
          <Menu.Item key="4" icon={<NotificationOutlined />}>
            Notificações
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default Navigation;
