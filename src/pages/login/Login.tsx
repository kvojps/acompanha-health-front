import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>AcompanhaHealth</h2>
          <label>
            <div className="login-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <div className="login-icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
      <div className="login-img-container"></div>
    </div>
  );
};

export default Login;
