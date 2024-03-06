import { createTheme } from "@mui/material";

//TODO: Awaiting full read access to wireframes and brand kit from Kat + Mark
//TODO: Pritesh to export orica mui library setting design tokens.
const themeColours = {
  darkNavy: "#00163C",
  navy: "#003366",
  blue: "#0097D6",
  lightBlue: "#56B8E0",
  white: "#FFFFFF"
};

export const theme = createTheme({
  palette: {
    primary: {
      main: themeColours.blue,
      contrastText: themeColours.white
    }
  }
});
