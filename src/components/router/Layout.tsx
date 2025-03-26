import { BrowserRouter } from "react-router";
import Navigate from "./routes";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useThemeContext } from "../theme/ThemeProvider";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

const Layout = () => {
  const { mode, setMode } = useThemeContext();
  console.log(mode);
  return (
    <BrowserRouter>
      <Stack direction={{ md: "row" }} sx={{ minHeight: "100vh" }}>
        <Stack sx={{ flex: 1 }}>
          <Button>Add Client</Button>
          <Typography variant="h1" color="primary.main">Hello, Material-UI</Typography>
          <Typography variant="body1">
            This is a sample text to demonstrate theme usage.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            style={{ marginTop: "20px" }}
          >
            Toggle Theme
          </Button>
        </Stack>
        <Box
          sx={{
            flex: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Navigate />
        </Box>
      </Stack>
    </BrowserRouter>
  );
};

export default Layout;
