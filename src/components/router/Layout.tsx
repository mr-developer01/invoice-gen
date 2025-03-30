import { useNavigate } from "react-router";
import Navigate from "./routes";
<<<<<<< HEAD
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
=======
import { Box, Stack } from "@mui/material";
import BasicSidebar from "../core/BasicSidebar";
import SimpleSnackbar from "../../ui/SimpleSnackbar";
import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { addClients } from "../../store/slices/updateClientSlice";
import { addInvoices } from "../../store/slices/invoiceSlice";
import clientData from "../../../MOCK_DATA_CLIENT.json";
import invoiceData from "../../../MOCK_DATA_INVOICES.json";

const Layout = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // console.log(invoiceData, "Invoices")

  useEffect(() => {
    dispatch(addClients(clientData));
    dispatch(addInvoices(invoiceData));
  }, [dispatch]);
  return (
    <>
      <SimpleSnackbar />
      <Stack
        direction={{ md: "row" }}
        sx={{ minHeight: "100vh", display: "flex" }}
      >
        <BasicSidebar />
        <Stack
          sx={{
            flex: 6,
            bgcolor: "background.paper",
          }}
        >
          <Stack
            sx={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              py: 2,
            }}
          >
            <Box
              component="img"
              sx={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                cursor: "pointer",
              }}
              alt="The house from the offer."
              src="https://www.pymnts.com/wp-content/uploads/2015/11/invoice.jpg"
              onClick={() => navigate("/")}
            />
          </Stack>
          <Box sx={{ flex: 14, px: 4, py: 2 }}>
            <Navigate />
          </Box>
        </Stack>
      </Stack>
    </>
>>>>>>> 4bd22594c184849ef334659eaa12c6d1683696c1
  );
};

export default Layout;
