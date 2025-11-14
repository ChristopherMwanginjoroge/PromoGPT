import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DemoPage from "./pages/DemoPage";

import Dashboard from "./pages/Dashboard";
import Ledger from "./pages/Ledger";
import BusinessData from "./pages/Business.Data";
import BusinessDataProducts from "./pages/BusinessDataProducts";
import BusinessDataSales from "./pages/BusinessDataSales";    
import Intelligence from "./pages/Intelligence";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-section">
        <Navbar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/demo" element={<DemoPage />} />

            <Route path="/business-data" element={<BusinessData />} />
            <Route path="/business-data/products" element={<BusinessDataProducts />} />
            <Route path="/business-data/sales" element={<BusinessDataSales />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ledger" element={<Ledger />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
