import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Login 🔐</h1>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default AdminLogin;