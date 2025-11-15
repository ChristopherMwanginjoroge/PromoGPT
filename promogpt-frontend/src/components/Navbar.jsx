// src/components/Navbar.jsx
import React from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const onDashboard = location.pathname === "/dashboard" || location.pathname === "/";

  return (
    <header
      className="navbar"
      style={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: onDashboard ? "transparent" : "var(--purple-dark)",
        color: "white",
        borderBottom: onDashboard ? "none" : "1px solid rgba(255,255,255,0.04)",
        backdropFilter: onDashboard ? "none" : "saturate(120%) blur(6px)"
      }}
    >
      {/* Only icon on Dashboard */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10, background: "linear-gradient(90deg,var(--purple-mid),var(--purple-light))",
          display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff"
        }}>
          PG
        </div>

        {!onDashboard && (
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>PromoGPT</div>
            {/* Add nav links/buttons here when not on Dashboard */}
          </div>
        )}
      </div>

      {/* right side invisible on dashboard */}
      <div style={{ marginLeft: "auto" }}>
        {!onDashboard && (
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn btn-outline">Connect</button>
            <button className="btn btn-primary">Upgrade</button>
          </div>
        )}
      </div>
    </header>
  );
}
