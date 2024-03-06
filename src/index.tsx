import "./index.scss";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import { CounterProvider } from "@/features/counter/CounterProvider.tsx";
import { RouteProvider } from "@/routing/routes.ts";

import { App } from "./App.tsx";
import { theme } from "./features/shared/theme/theme.ts";

const element = document.getElementById("root");
if (element == null) {
  throw new Error("Root element not found.");
}

// eslint-disable-next-line import/no-named-as-default-member
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Adds Material UI's CSS baseline */}
      <RouteProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </RouteProvider>
    </ThemeProvider>
  </React.StrictMode>
);
