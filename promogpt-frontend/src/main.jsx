import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

// ✅ Custom theme
const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5f3ff",
      100: "#e9d8fd",
      200: "#d6bcfa",
      300: "#b794f4",
      400: "#9f7aea",
      500: "#805ad5", // Purple base
      600: "#6b46c1",
      700: "#553c9a",
      800: "#44337a",
      900: "#322659",
    },
    gold: {
      50: "#fffbea",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
