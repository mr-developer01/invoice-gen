import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = (mode: "light" | "dark") =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: {
          main: mode === "light" ? "#8B5B5B" : "#811212",
        },
        secondary: {
          main: mode === "light" ? "#BE5FD6" : "#E211E9",
        },
        background: {
          default: mode === "light" ? "#DBDBDB" : "#121212",
          paper: mode === "light" ? "#FFFFFF" : "#1e1e1e",
        },
        text: {
          primary: mode === "light" ? "#000000" : "#fff",
          secondary: mode === "light" ? "#666666" : "#e0e0e0",
        },
      },
      typography: {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        h1: {
          fontWeight: 700,
          lineHeight: 1.2,
          fontSize: "2.5rem",
          "@media (min-width:600px)": {
            fontSize: "3rem",
          },
          "@media (min-width:900px)": {
            fontSize: "3.5rem",
          },
          "@media (min-width:1200px)": {
            fontSize: "4rem",
          },
        },
        h2: {
          fontWeight: 600,
          lineHeight: 1.3,
          fontSize: "2rem",
          "@media (min-width:600px)": {
            fontSize: "2.4rem",
            lineHeight: 5,
          },
          "@media (min-width:900px)": {
            fontSize: "2.8rem",
          },
          "@media (min-width:1200px)": {
            fontSize: "3.2rem",
          },
        },
        h3: {
          fontWeight: 600,
          lineHeight: 1.3,
          fontSize: "1.75rem",
          "@media (min-width:600px)": {
            fontSize: "2rem",
          },
          "@media (min-width:900px)": {
            fontSize: "2.25rem",
          },
        },
        h4: {
          fontWeight: 500,
          lineHeight: 1.4,
          fontSize: "1.5rem",
          "@media (min-width:600px)": {
            fontSize: "1.75rem",
          },
          "@media (min-width:900px)": {
            fontSize: "2rem",
          },
        },
        h5: {
          fontWeight: 500,
          lineHeight: 1.4,
          fontSize: "1.25rem",
          "@media (min-width:600px)": {
            fontSize: "1.5rem",
          },
        },
        h6: {
          fontWeight: 500,
          lineHeight: 1.5,
          fontSize: "1.1rem",
          "@media (min-width:600px)": {
            fontSize: "1.25rem",
          },
        },
        body1: {
          fontSize: "1rem",
          lineHeight: 1.6,
          "@media (min-width:900px)": {
            fontSize: "1.1rem",
          },
        },
        body2: {
          fontSize: "0.875rem",
          lineHeight: 1.6,
          "@media (min-width:900px)": {
            fontSize: "1rem",
          },
        },
        button: {
          fontSize: "0.875rem",
          fontWeight: 600,
          "@media (min-width:600px)": {
            fontSize: "1rem",
          },
        },
        caption: {
          fontSize: "0.75rem",
          "@media (min-width:600px)": {
            fontSize: "0.875rem",
          },
        },
        overline: {
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "1px",
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              borderRadius: "8px",
              padding: "8px 16px",
              transition: "all 0.3s ease",
              fontWeight: 500,
              "@media (min-width:0px)": {
                padding: "6px 8px",
                fontSize: "14px"
              },
              "@media (min-width:600px)": {
                padding: "8px 15px",
                fontSize: "12px"
              },
              "@media (min-width:900px)": {
                padding: "8px 10px",
                fontSize: "15px"
              },
            },
            containedPrimary: {
              backgroundColor: mode === "light" ? "#3A3A3A" : "#811212",
              "&:hover": {
                backgroundColor: mode === "light" ? "#b388eb" : "#6A0F0F",
              },
            },
            containedSecondary: {
              backgroundColor: mode === "light" ? "#BE5FD6" : "#E211E9",
              "&:hover": {
                backgroundColor: mode === "light" ? "#A84CBE" : "#C20EC9",
              },
            },
            outlinedPrimary: {
              borderColor: mode === "light" ? "#ffffff" : "#811212",
              color: mode === "light" ? "#ffffff" : "#811212",
              "&:hover": {
                backgroundColor:
                  mode === "light"
                    ? "rgba(139, 91, 91, 0.1)"
                    : "rgba(129, 18, 18, 0.1)",
              },
            },
            outlinedSecondary: {
              borderColor: mode === "light" ? "#BE5FD6" : "#E211E9",
              color: mode === "light" ? "#BE5FD6" : "#E211E9",
              "&:hover": {
                backgroundColor:
                  mode === "light"
                    ? "rgba(190, 95, 214, 0.1)"
                    : "rgba(226, 17, 233, 0.1)",
              },
            },
            textPrimary: {
              color: mode === "light" ? "#8B5B5B" : "#811212",
              "&:hover": {
                backgroundColor:
                  mode === "light"
                    ? "rgba(139, 91, 91, 0.1)"
                    : "rgba(129, 18, 18, 0.1)",
              },
            },
            textSecondary: {
              color: mode === "light" ? "#BE5FD6" : "#E211E9",
              "&:hover": {
                backgroundColor:
                  mode === "light"
                    ? "rgba(190, 95, 214, 0.1)"
                    : "rgba(226, 17, 233, 0.1)",
              },
            },
          },
        },
      },
    })
  );

// Example usage
// export const lightTheme = createDynamicTheme("light");
// export const darkTheme = createDynamicTheme("dark");
