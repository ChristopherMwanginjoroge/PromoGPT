import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
        color: "#fff",
        background: "linear-gradient(135deg, #3b256a, #171129)",
        borderRadius: "20px",
        margin: "20px",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0, fontWeight: 700 }}>
        404
      </h1>

      <p style={{ fontSize: "1.4rem", marginTop: "10px", maxWidth: "500px" }}>
        Oops… the page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/dashboard"
        style={{
          marginTop: "30px",
          background: "#7d5fff",
          padding: "14px 32px",
          borderRadius: "12px",
          fontWeight: "600",
          color: "white",
          textDecoration: "none",
          transition: "0.3s ease",
        }}
      >
        Go Back Home
      </Link>

      <p style={{ marginTop: "20px", opacity: 0.6 }}>
        PromoGPT • Smart Business Assistant
      </p>
    </div>
  );
}
