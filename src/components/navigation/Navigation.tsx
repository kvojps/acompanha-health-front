import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const getMenuKey = (path: string) => {
    switch (path) {
      case "/user":
        return "2";
      case "/patient":
        return "3";
      case "/notification":
        return "4";
      default:
        return "1";
    }
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
        <Menu mode="inline" defaultSelectedKeys={[getMenuKey(location.pathname)]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home">Tela inicial</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/user">Usuários</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<MedicineBoxOutlined />}>
            <Link to="/patient">Pacientes</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<NotificationOutlined />}>
            <Link to="/notification">Notificações</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default Navigation;
