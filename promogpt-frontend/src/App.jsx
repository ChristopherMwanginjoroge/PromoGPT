// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
// import DashboardLayout from "./layouts/DashboardLayout";

// // Core Pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Onboarding from "./pages/Onboarding";
// import Demo from "./pages/Demo";

// // Dashboard Pages
// import DashboardHome from "./pages/dashboard/DashboardHome";
// import CampaignGenerator from "./pages/dashboard/CampaignGenerator";
// import SavedContent from "./pages/dashboard/SavedContent";
// import Products from "./pages/dashboard/Products";
// import Ledger from "./pages/dashboard/Ledger";
// import BusinessProfile from "./pages/dashboard/BusinessProfile";
// import Support from "./pages/dashboard/Support";
// import Generator from "./pages/Generator";

// export default function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/onboarding" element={<Onboarding />} />
//         <Route path="/demo" element={<Demo />} />

//         {/* Dashboard Layout Routes */}
//         <Route element={<DashboardLayout />}>
//           <Route path="/dashboard" element={<DashboardHome />} />
//           <Route path="/dashboard/generator" element={<CampaignGenerator />} />
//           <Route path="/dashboard/saved" element={<SavedContent />} />
//           <Route path="/dashboard/products" element={<Products />} />
//           <Route path="/dashboard/ledger" element={<Ledger />} />
//           <Route path="/dashboard/profile" element={<BusinessProfile />} />
//           <Route path="/dashboard/support" element={<Support />} />
//           <Route path="/generator" element={<Generator />} />
//         </Route>
//       </Routes>
//     </AuthProvider>
//   );
// }
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Generator from "./pages/Generator";
import CreateContent from "./pages/CreateContent";
import SavedPosts from "./pages/SavedPosts";
import Products from "./pages/Products";
import Ledger from "./pages/Ledger";
import BusinessProfile from "./pages/BusinessProfile";
import Support from "./pages/Support";
import Demo from "./pages/Demo";

export default function App(){
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-area">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/onboarding" element={<Onboarding/>} />

            <Route path="/home" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/campaigns" element={<Campaigns/>} />
            <Route path="/generator" element={<Generator/>} />
            <Route path="/create-content" element={<CreateContent/>} />
            <Route path="/saved" element={<SavedPosts/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/ledger" element={<Ledger/>} />
            <Route path="/business-profile" element={<BusinessProfile/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/demo" element={<Demo/>} />

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
