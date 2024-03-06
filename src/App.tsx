import { Box, Stack } from "@mui/material";
import { from } from "linq-to-typescript";

import eslintLogo from "/assets/eslint.svg";
import preactLogo from "/assets/preact.svg";
import prettierLogo from "/assets/prettier.svg";
import reactLogo from "/assets/react.svg";
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
    title: "Type Route",
    src: typeRouteLogo
  }
];

export function App() {
  return (
    <Stack height="100vh" direction="column" alignItems="center" justifyContent="start">
      {/* For horizontally aligned items with space around them */}
      <Box sx={{ display: "flex", justifyContent: "start", mt: 2, mb: 2 }}>
        {from(data).select(({ src, title }, idx) => (
          <Box
            component="img"
            key={idx}
            src={src}
            sx={{ width: 48, height: 48, ml: 1, mr: 1 }}
            alt={`${title} logo`}
            title={title}
          />
        ))}
      </Box>

      {/* For RouteLinks - assuming it's a component rendering navigation links */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
        <RouteLinks />
      </Box>

      {/* For RouteContent - assuming it's a component rendering route-specific content */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
        <RouteContent />
      </Box>
    </Stack>
  );
}
