import { BrowserRouter } from "react-router";
import Navigate from "./routes";
import { Box } from "@mui/material";
import TemporaryDrawer from "../../ui/TemporaryDrawer";

const Layout = () => {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: "100vh", display: "flex" }}>
        <Box sx={{flex: 1}}>
          <TemporaryDrawer />
        </Box>
        <Box sx={{flex: 6, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Navigate />
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default Layout;
