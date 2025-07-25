import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// Default Import
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// StrictMode - Runs Component Twice to checks errors only in Development time
root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
);

// <App /> -> Call a component
