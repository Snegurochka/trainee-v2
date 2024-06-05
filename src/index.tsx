import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

import "./index.css";
import "./app/services/i18n/i18n";
import { ThemeAppProvider } from "./features/Theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeAppProvider>
      <App />
    </ThemeAppProvider>
  </React.StrictMode>
);
