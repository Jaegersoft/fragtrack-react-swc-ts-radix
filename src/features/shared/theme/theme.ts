import { createTheme } from "@mui/material";

//TODO: Awaiting full read access to wireframes and brand kit from Kat + Mark
const themeColours = {
  navy: "#01163C",
  blue: "#003366",
  white: "#ffffff"
};

export const theme = createTheme({
  palette: {
    primary: {
      main: themeColours.blue,
      contrastText: themeColours.white
    }
  }
});
