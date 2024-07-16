import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function LoginForm() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/home");
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    forgotPassword: {
      float: "right" as "right" | "left" | "none" | "initial" | "inherit",
    },
    header: {
      marginBottom: token.marginSM,
    },
    logo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo}>
            <Title style={styles.title}>AcompanhaHealth - Login</Title>
          </div>
          <Text style={styles.text}>
            Bem-vindo de volta ao AcompanhaHealth! Por favor, insira seus dados
            abaixo para fazer login.
          </Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Por favor insira seu e-mail!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor insira sua senha!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Senha"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Lembrar de mim</Checkbox>
            </Form.Item>
            <a style={styles.forgotPassword} href="">
              Esqueceu a senha?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block={true} type="primary" htmlType="submit">
              Entrar
            </Button>
            <div>
              <Text style={styles.text}>Não possui uma conta?</Text>{" "}
              <Link href="">Solicite acesso</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
