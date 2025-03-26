import { createTheme, responsiveFontSizes, Theme } from "@mui/material";

export const getTheme = (mode: "light" | "dark"): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: { main: mode === "light" ? "#D220B7" : "#838112" },
        secondary: { main: mode === "light" ? "#ff4081" : "#f48fb1" },
        error: { main: "#d32f2f" },
        warning: { main: "#ffa000" },
        info: { main: "#0288d1" },
        success: { main: "#388e3c" },
        background: {
          default: mode === "light" ? "#f4f4f4" : "#121212",
          paper: mode === "light" ? "#ffffff" : "#1e1e1e",
        },
        text: {
          primary: mode === "light" ? "#000000" : "#ffffff",
          secondary: mode === "light" ? "#555" : "#b0bec5",
        },
      },
      typography: {
        fontFamily: mode === "light" ? "Inter, sans-serif" : "Poppins, sans-serif",
        h1: { fontSize: "2rem", "@media (min-width:600px)": { fontSize: "2.5rem" } },
        body1: { fontSize: "0.9rem", "@media (min-width:960px)": { fontSize: "1rem" } },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: "0.875rem",
              textTransform: "none",
              padding: "6px 12px",
              borderRadius: "8px",
              "@media (min-width:600px)": { fontSize: "1rem", padding: "8px 16px" },
            },
          },
        },
      },
    })
  );