import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "./contexts/AuthContext";
import App from "./App.jsx";

// Custom theme
const theme = extendTheme({
  colors: {
    brand: {
      purple: "#6B46C1",
      gold: "#FFD700",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
