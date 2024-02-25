import { useSignal } from "@preact/signals-react";
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
import { Button } from "@/components/ui/button";
import { RouteContent } from "@/router/RouteContent";
import { RouteLinks } from "@/router/RouteLinks";

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

export default function App() {
  const count = useSignal(0);

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

      <div className="flex w-full justify-center  mt-4 mb-4">
        <Button variant="destructive" onClick={() => (count.value += 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}
