import { signal } from "@preact/signals-react";

import eslintLogo from "/assets/eslint.svg";
import preactLogo from "/assets/preact.svg";
import prettierLogo from "/assets/prettier.svg";
import radixUiLogo from "/assets/radix-ui.svg";
import reactLogo from "/assets/react.svg";
import shadCnLogo from "/assets/shadcn-ui.svg";
import swcLogo from "/assets/swc.svg";
import typeRouteLogo from "/assets/type-route.svg";
import viteLogo from "/assets/vite.svg";
import { Button } from "@/components/ui/button";

import { RouteContent } from "./router/RouteContent";
import { RouteLinks } from "./router/RouteLinks";

const count = signal(0);

export default function App() {
  return (
    <>
      <div className="flex w-full justify-center mt-4 mb-4">
        <img src={viteLogo} className="w-12 h-12 ml-2 mr-2" alt="Vite logo" title="Vite" />
        <img src={swcLogo} className="w-12 h-12 ml-2 mr-2" alt="SWC logo" title="SWC" />
        <img src={reactLogo} className="w-12 h-12 ml-2 mr-2" alt="React logo" title="React" />
        <img src={preactLogo} className="w-12 h-12 ml-2 mr-2" alt="Preact logo" title="Preact Signals" />
        <img src={prettierLogo} className="w-12 h-12 ml-2 mr-2" alt="Prettier logo" title="Prettier" />
        <img src={eslintLogo} className="w-12 h-12 ml-2 mr-2" alt="ESLint logo" title="ESLint" />
        <img src={radixUiLogo} className="w-12 h-12 ml-2 mr-2" alt="Radix UI logo" title="Radix UI" />
        <img src={shadCnLogo} className="w-12 h-12 ml-2 mr-2" alt="ShadCn UI logo" title="shadcn/ui" />
        <img src={typeRouteLogo} className="w-12 h-12 ml-2 mr-2" alt="Type Route logo" title="Type Route" />
      </div>

      <div className="flex w-full justify-center mt-4 mb-4">
        <RouteContent />
      </div>

      <div className="flex w-full justify-center mt-4 mb-4">
        <RouteLinks />
      </div>

      <div className="flex w-full justify-center  mt-4 mb-4">
        <Button variant="destructive" onClick={() => (count.value += 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}
