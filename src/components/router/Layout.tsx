import { useNavigate } from "react-router";
import Navigate from "./routes";
import { Box, Stack, Typography } from "@mui/material";
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
          direction={"row"}
            sx={{
              flex: 1,
              justifyContent: "center",
              cursor: "pointer",
              py: 2,
              gap: 1.2
            }}
            onClick={() => navigate("/")}
          >
            <Box
              component="img"
              sx={{
                height: 30,
                width: 30,
                borderRadius: "10px",
              }}
              alt="The house from the offer."
              src="/LumberTrack.png"
            />
            <Typography variant="h4">Lumber<Typography variant="overline" color="#026D8D">Track</Typography></Typography>
          </Stack>
          <Box sx={{ flex: 14, px: 4, py: 2 }}>
            <Navigate />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Layout;
