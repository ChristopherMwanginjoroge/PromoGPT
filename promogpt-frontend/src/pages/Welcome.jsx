import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <h1 className="welcome-title">
          Welcome to <span>PromoGPT</span>
        </h1>
        <p className="welcome-subtitle">
          Your AI-powered marketing assistant for small businesses.
          Create campaigns, manage products, analyze your sales, and grow smarter.
        </p>

        <div className="welcome-buttons">
          <Link to="/login">
            <button className="btn-primary">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn-secondary">Create Account</button>
          </Link>
          <Link to="/demo">
            <button className="btn-outline">Try Demo</button>
          </Link>
        </div>
      </div>

      <div className="welcome-right">
        <img
          src="/assets/hero-illustration.png"
          alt="PromoGPT Illustration"
          className="welcome-img"
        />
      </div>
    </div>
  );
};

export default Welcome;
