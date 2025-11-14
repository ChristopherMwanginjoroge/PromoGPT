import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function BusinessData() {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="h2">Business Data</h2>
        <p className="text-muted">Choose the dataset you want to inspect.</p>

        <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={() => nav("/business-data/products")}>
            Product Data
          </button>
          <button className="btn btn-accent" onClick={() => nav("/business-data/sales")}>
            Sales Data
          </button>
        </div>
      </div>
    </div>
  );
}
