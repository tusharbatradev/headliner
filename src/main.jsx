import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/montserrat"; // Import Montserrat font

// Create a theme with custom font and button styles
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif", // Add custom font globally
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase globally
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
