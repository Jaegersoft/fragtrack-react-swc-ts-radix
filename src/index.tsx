import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { CounterProvider } from "@/features/counter/CounterProvider.tsx";
import { ThemeProvider } from "@/features/shared/theme/ThemeProvider.tsx";
import { ThemeToggle } from "@/features/shared/theme/ThemeToggle.tsx";
import { RouteProvider } from "@/routing/routes.ts";

import App from "./App.tsx";

const element = document.getElementById("root");
if (element == null) {
  throw new Error("Root element not found.");
}

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <RouteProvider>
      <ThemeProvider storageKey="ui-theme">
        <CounterProvider>
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
        </CounterProvider>
      </ThemeProvider>
    </RouteProvider>
  </React.StrictMode>
);
