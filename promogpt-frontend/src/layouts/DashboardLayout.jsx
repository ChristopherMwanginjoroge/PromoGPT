import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ title, children }) {
  return (
    <Box display="flex" minH="100vh" bg="gray.50">
      <Sidebar />
      <Box flex="1" ml={{ base: "70px", md: "220px" }}>
        <Navbar title={title} />
        <Box p={6}>{children}</Box>
      </Box>
    </Box>
  );
}
