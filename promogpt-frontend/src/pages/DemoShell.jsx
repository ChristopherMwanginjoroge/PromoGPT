// src/pages/DemoShell.jsx
import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DemoShell() {
  const { enterDemo } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    enterDemo();
    nav("/dashboard");
  }, []);

  return null; // instantly redirects to dashboard in demo mode
}
