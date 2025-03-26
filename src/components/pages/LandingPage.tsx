import { useEffect } from "react";
import clientData from "../../../MOCK_DATA_CLIENT.json";
import invoiceData from "../../../MOCK_DATA_INVOICES.json";
import { useAppDispatch } from "../../store/hooks";
import { addClients } from "../../store/slices/clientSlice";
import { addInvoices } from "../../store/slices/invoiceSlice";
import ClientTable from "../core/ClientTable";
import { Box } from "@mui/material";
import InvoiceTable from "../core/InvoiceTable";
const LandingPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addClients(clientData));
    dispatch(addInvoices(invoiceData));
  }, [dispatch]);

  return (
    <>
      <ClientTable />
      <Box mt={4}>
        <InvoiceTable />
      </Box>
    </>
  );
};

export default LandingPage;
