import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ThemeAppProvider } from "./features/Theme";
import "./index.css";
import "./app/services/i18n/i18n";
import "./app/services/firebase";
import { Provider } from "react-redux";
import { store } from "./app/services/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Provider store={store}>
        <ThemeAppProvider>
          <App />
        </ThemeAppProvider>
      </Provider>
  </React.StrictMode>
);
