import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app/App";
import "./styles/family-ui-tokens.css";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/utilities.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
