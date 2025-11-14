// src/pages/Settings.jsx
import React from "react";

export default function Settings(){
  return (
    <div className="container">
      <div className="card">
        <h2 className="h2">Settings</h2>
        <p className="text-muted">Manage account preferences, plan, and integrations.</p>

        <div style={{marginTop:12}}>
          <div className="card">
            <h3 className="small">Account</h3>
            <button className="btn btn-outline" style={{marginTop:8}}>Change Password</button>
          </div>

          <div className="card" style={{marginTop:12}}>
            <h3 className="small">Integrations</h3>
            <p className="text-muted">Connect your e-commerce platform or social accounts.</p>
            <button className="btn btn-primary">Connect Store</button>
          </div>
        </div>
      </div>
    </div>
  );
}
