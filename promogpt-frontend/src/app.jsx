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
import { Box, Text, Button } from "@chakra-ui/react";

export default function App() {
  return (
    <Box bg="purple.700" minH="100vh" display="flex" alignItems="center" justifyContent="center" flexDir="column" gap={4}>
      <Text color="gold.400" fontSize="3xl" fontWeight="bold">
        Chakra UI is Working 🎉
      </Text>
      <Button colorScheme="purple">Click Me</Button>
    </Box>
  );
}
