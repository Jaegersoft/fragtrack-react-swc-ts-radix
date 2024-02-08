import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { RouteProvider } from "./router/routes.ts";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";
import { ThemeToggle } from "./theme/ThemeToggle.tsx";

const element = document.getElementById("root");
if (element == null) {
  throw new Error("Root element not found.");
}

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <RouteProvider>
      <ThemeProvider storageKey="ui-theme">
        <div className="flex flex-col h-screen">
          <div className="flex flex-shrink-0 justify-end">
            <div className="mr-4 mt-4">
              <ThemeToggle />
            </div>
          </div>
          <div className="flex flex-grow flex-col justify-center">
            <App />
          </div>
        </div>
      </ThemeProvider>
    </RouteProvider>
  </React.StrictMode>
);
