import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">Welcome to PromoGPT</h1>
      <p className="dashboard-subtitle">
        Your Intelligent Business Assistant — Generate insights, manage products, track data,
        and boost your brand with AI.
      </p>

      {/* Quick Actions */}
      <div className="quick-actions">
        <Link to="/ledger" className="dash-card">
          <h3>📘 Ledger</h3>
          <p>Track product sales, revenue, and daily business activity.</p>
        </Link>

        <Link to="/products" className="dash-card">
          <h3>🛍 Products</h3>
          <p>Manage product listings, pricing, and categories.</p>
        </Link>

        <Link to="/intelligence" className="dash-card">
          <h3>🤖 AI Intelligence</h3>
          <p>Ask AI anything about your business or industry.</p>
        </Link>

        <Link to="/profile" className="dash-card">
          <h3>👤 Profile</h3>
          <p>Update your personal and business information.</p>
        </Link>

        <Link to="/settings" className="dash-card">
          <h3>⚙ Settings</h3>
          <p>Configure branding, preferences, and system settings.</p>
        </Link>

        <Link to="/demo" className="dash-card">
          <h3>🎨 Demo Experience</h3>
          <p>Explore a fully populated AI dashboard example.</p>
        </Link>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h2>✨ What can you do here?</h2>
        <ul>
          <li>✔ Generate promo content for your brand</li>
          <li>✔ Upload business data and get insights</li>
          <li>✔ Manage your products and inventory</li>
          <li>✔ Track your sales & performance</li>
          <li>✔ Chat with an intelligent AI assistant</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
