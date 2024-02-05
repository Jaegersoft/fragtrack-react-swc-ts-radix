import "./app.css";

import { signal } from "@preact/signals-react";
import { Button, Flex } from "@radix-ui/themes";

import eslintLogo from "/eslint.svg";
import preactLogo from "/preact.svg";
import prettierLogo from "/prettier.svg";
import radixUiLogo from "/radix-ui.svg";
import reactLogo from "/react.svg";
import swcLogo from "/swc.svg";
import viteLogo from "/vite.svg";

const count = signal(0);

function App() {
  return (
    <>
      <Flex direction="row" align="center">
        <img src={viteLogo} alt="Vite logo" />
        <img src={swcLogo} alt="SWC logo" />
        <img src={reactLogo} alt="React logo" />
        <img src={preactLogo} alt="Preact logo" />
        <img src={prettierLogo} alt="Prettier logo" />
        <img src={eslintLogo} alt="ESLint logo" />
        <img src={radixUiLogo} alt="Radix UI logo" />
      </Flex>
      <Flex direction="row" align="center" pt="9">
        <Button onClick={() => (count.value += 1)}>count is {count}</Button>
      </Flex>
    </>
  );
}

export default App;
