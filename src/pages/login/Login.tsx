import React from "react";
import "./Login.css";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <LoginForm/>
      </div>
      <div className="login-img-container">
        <img src="https://i.imgur.com/IE16wsl.jpg" alt="" />
      </div>
    </div>
  );
};

export default Login;
