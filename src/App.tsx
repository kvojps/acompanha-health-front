import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import User from "./pages/users/User";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
