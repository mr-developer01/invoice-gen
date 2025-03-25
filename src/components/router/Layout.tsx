import { BrowserRouter } from "react-router";
import Navigate from "./routes";
import { Box } from "@mui/material";
import TemporaryDrawer from "../../ui/TemporaryDrawer";

const Layout = () => {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: "100vh", display: "flex" }}>
        <Box sx={{width: '18%', bgcolor: 'red'}}>
          <TemporaryDrawer />
        </Box>
        <Box sx={{width: '88%', bgcolor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Navigate />
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default Layout;
