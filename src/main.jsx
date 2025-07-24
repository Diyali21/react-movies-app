import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Default Import
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// StrictMode - Runs Component Twice to checks errors only in Development time
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// <App /> -> Call a component
