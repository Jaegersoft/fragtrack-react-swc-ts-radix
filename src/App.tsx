import { CounterButton } from "@counter/CounterButton";
import { CounterDisplay } from "@counter/CounterDisplay";
import { from } from "linq-to-typescript";

import eslintLogo from "/assets/eslint.svg";
import preactLogo from "/assets/preact.svg";
import prettierLogo from "/assets/prettier.svg";
import radixUiLogo from "/assets/radix-ui.svg";
import reactLogo from "/assets/react.svg";
import shadCnLogo from "/assets/shadcn-ui.svg";
import swcLogo from "/assets/swc.svg";
import typeRouteLogo from "/assets/type-route.svg";
import viteLogo from "/assets/vite.svg";
import { RouteContent } from "@/routing/RouteContent";
import { RouteLinks } from "@/routing/RouteLinks";

type Image = {
  src: string;
  title: string;
};

const data: Image[] = [
  {
    title: "Vite",
    src: viteLogo
  },
  {
    title: "SWC",
    src: swcLogo
  },
  {
    title: "React",
    src: reactLogo
  },
  {
    title: "Preact",
    src: preactLogo
  },
  {
    title: "Prettier",
    src: prettierLogo
  },
  {
    title: "ESLint",
    src: eslintLogo
  },
  {
    title: "Radix-UI",
    src: radixUiLogo
  },
  {
    title: "shadcn/ui",
    src: shadCnLogo
  },
  {
    title: "Type Route",
    src: typeRouteLogo
  }
];

const test = 5;

export function App() {
  return (
    <>
      <div className="flex w-full justify-center mt-4 mb-4">
        {from(data).select(({ src, title }, idx) => (
          <img key={idx} src={src} className="w-12 h-12 ml-2 mr-2" alt={`${title} logo`} title={title} />
        ))}
      </div>

      <div className="flex w-full justify-center mt-4 mb-4">
        <RouteContent />
      </div>

      <div className="flex w-full justify-center mt-4 mb-4">
        <RouteLinks />
      </div>

      {/* Trivial demonstration of shared state with preact signals + context */}
      <div className="flex flex-col justify-center items-center mt-4 mb-4">
        <CounterButton />
        <CounterDisplay />
      </div>
    </>
  );
}
