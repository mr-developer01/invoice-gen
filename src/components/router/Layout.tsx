import { BrowserRouter } from "react-router";
import Navigate from "./routes";
import { Box, Button, Stack } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { setTheme } from "../../store/slices/toggleSlice";

const Layout = () => {
  const dispatch = useAppDispatch();
  return (
    <BrowserRouter>
      <Stack
        direction={{ md: "row" }}
        sx={{ minHeight: "100vh", display: "flex" }}
      >
        <Stack
          sx={{
            flex: 1,
            bgcolor: "background.default",
            justifyContent: "space-between",
            py: 4,
            px: 2,
          }}
        >
          <Stack spacing={3}>
            <Button variant="contained">Add Client</Button>
            <Button variant="contained">Create Invoice</Button>
          </Stack>
          <Stack>
            <Button variant="outlined" onClick={() => dispatch(setTheme())}>
              Change Theme
            </Button>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flex: 6,
            bgcolor: "background.paper",
          }}
        >
          <Stack sx={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>Logo</Stack>
          <Box sx={{ flex: 14, px: 4, py: 2}}>
            <Navigate />
          </Box>
        </Stack>
      </Stack>
    </BrowserRouter>
  );
};

export default Layout;
