import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./i18n/i18n";
import theme from "./theme.js";
import "./scroll-reveal.css";
import "./hero-visual.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
