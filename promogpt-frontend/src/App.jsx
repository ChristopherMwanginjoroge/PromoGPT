// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages
import Dashboard from "./pages/Dashboard";
import ProductData from "./pages/ProductData";
import SalesData from "./pages/SalesData";
import BusinessData from "./pages/BusinessData";
import Intelligence from "./pages/Intelligence";
import Profile from "./pages/Profile";
import Ledger from "./pages/Ledger";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      
      {/* Sidebar (hover only) */}
      <Sidebar />

      {/* Body wrapper */}
      <div style={{ flex: 1, overflowY: "auto", position: "relative" }}>
        
        {/* Navbar (dashboard shows icon only) */}
        <Navbar />

        {/* PADDING TO PREVENT OVERLAP WITH NAVBAR */}
        <div style={{ paddingTop: "80px" }}>
          <Routes>

            {/* Main pages */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Business data */}
            <Route path="/business-data" element={<BusinessData />} />
            <Route path="/business-data/products" element={<ProductData />} />
            <Route path="/business-data/sales" element={<SalesData />} />

            {/* Ledger */}
            <Route path="/ledger" element={<Ledger />} />

            {/* AI Chat / Generators */}
            <Route path="/ai" element={<Intelligence />} />

            {/* Profile */}
            <Route path="/profile" element={<Profile />} />

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}
