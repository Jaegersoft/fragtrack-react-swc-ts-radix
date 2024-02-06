import "@radix-ui/themes/styles.css";

import { Flex, Theme } from "@radix-ui/themes";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { RouteProvider } from "./router.ts";

const element = document.getElementById("root");
if (element == null) {
  throw new Error("Root element not found.");
}

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <Theme appearance="inherit">
      <RouteProvider>
        <Flex direction="column" align="center" justify="center" display="flex" height="100%">
          <App />
        </Flex>
      </RouteProvider>
    </Theme>
  </React.StrictMode>
);
