import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginUser({ email, password });
      navigate("/dashboard");
    } catch (err) {
      setError(err.error || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>Login to your PromoGPT account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="alert">{error}</div>}
          <button type="submit">Login</button>
        </form>
        <p className="switch">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
  