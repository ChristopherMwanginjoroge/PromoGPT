import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";

// Custom theme colors
const theme = extendTheme({
  colors: {
    purple: {
      700: "#6B46C1",
      900: "#4C1D95",
    },
    gold: {
      400: "#FFD700",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
