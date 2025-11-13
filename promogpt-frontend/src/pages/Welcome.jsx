// src/pages/Welcome.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Welcome(){
  return (
    <div className="page">
      <div className="hero card">
        <div className="left">
          <h1 className="page-title">Welcome to PromoGPT</h1>
          <p className="page-sub">Generate short ads, social posts and email snippets — powered by AI and tuned to your brand.</p>
          <div style={{marginTop:16}}>
            <Link to="/signup"><button className="btn">Get started — it's free</button></Link>
            <Link to="/demo" style={{marginLeft:12}}><button className="btn-outline">Try demo</button></Link>
          </div>
        </div>
        <div className="right">
          <div style={{background:"linear-gradient(135deg,#f7f0ff,#fff9e6)", padding:14, borderRadius:12, boxShadow:"var(--shadow-sm)"}}>
            <strong>Tip</strong>
            <p style={{marginTop:8, color:"var(--muted)"}}>Start by adding a product and then run "Generator" for a matching campaign prompt.</p>
          </div>
        </div>
      </div>

      <section className="stats-grid">
        <div className="stat-card card">
          <div className="stat-label">Active campaigns</div>
          <div className="stat-value">12</div>
          <div className="page-sub">Last 30 days</div>
        </div>
        <div className="stat-card card">
          <div className="stat-label">Generated posts</div>
          <div className="stat-value">320</div>
          <div className="page-sub">Total</div>
        </div>
        <div className="stat-card card">
          <div className="stat-label">Revenue driven</div>
          <div className="stat-value">Ksh 185,400</div>
          <div className="page-sub">Last 30 days (estimated)</div>
        </div>
      </section>
    </div>
  );
}
