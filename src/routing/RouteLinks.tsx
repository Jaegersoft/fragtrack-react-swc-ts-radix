import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SyntheticEvent } from "react";
import { Route } from "type-route";

import { routes, useRoute } from "./routes"; // Adjust the import path to your routes configuration

const tabOptions = {
  home: routes.home(),
  counter: routes.counter()
} as Record<keyof typeof routes, Route<typeof routes>>;

export function RouteLinks() {
  const { name } = useRoute();

  function handleChange(_event: SyntheticEvent, value: keyof typeof tabOptions): void {
    tabOptions[value].push();
  }

  return (
    <Tabs value={name} onChange={handleChange} centered>
      {Object.values(tabOptions).map((option, idx) => {
        return <Tab key={idx} value={option.name} label={option.name} />;
      })}
    </Tabs>
  );
}
