import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./context/navBar";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
