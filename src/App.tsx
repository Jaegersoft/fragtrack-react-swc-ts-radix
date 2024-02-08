import "./app.css";

import { signal } from "@preact/signals-react";
import { Button, Flex } from "@radix-ui/themes";

import eslintLogo from "/eslint.svg";
import preactLogo from "/preact.svg";
import prettierLogo from "/prettier.svg";
import radixUiLogo from "/radix-ui.svg";
import reactLogo from "/react.svg";
import swcLogo from "/swc.svg";
import typeRouteLogo from "/type-route.svg";
import viteLogo from "/vite.svg";

import { RouteContent } from "./router/RouteContent";
import { RouteLinks } from "./router/RouteLinks";

const count = signal(0);

export default function App() {
  return (
    <>
      <Flex direction="row" align="center">
        <img src={viteLogo} alt="Vite logo" title="Vite" />
        <img src={swcLogo} alt="SWC logo" title="SWC" />
        <img src={reactLogo} alt="React logo" title="React" />
        <img src={preactLogo} alt="Preact logo" title="Preact" />
        <img src={prettierLogo} alt="Prettier logo" title="Prettier" />
        <img src={eslintLogo} alt="ESLint logo" title="ESLint" />
        <img src={radixUiLogo} alt="Radix UI logo" title="Radix UI" />
        <img src={typeRouteLogo} alt="Type Route logo" title="Type Route" />
      </Flex>

      <Flex direction="row" pb="5" pt="5">
        <RouteLinks />
      </Flex>

      <Flex direction="row">
        <RouteContent />
      </Flex>

      <Flex direction="row" align="center" pt="9">
        <Button onClick={() => (count.value += 1)}>count is {count}</Button>
      </Flex>
    </>
  );
}
