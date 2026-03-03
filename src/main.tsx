import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { App } from "./app";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
