import { createTheme } from "@mui/material";

export const AppTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9A3030",
    },
    secondary: {
      main: "#F2F2F2",
    },
    text: {
      primary: "#dddddd",
    },
    background: {
      default: "#121212",
    },
    contrastThreshold: 4.5,
  },
  typography: {
    fontFamily: "Open Sans",
  },
});
