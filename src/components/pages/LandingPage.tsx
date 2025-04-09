import ClientTable from "../core/ClientTable";
import { Box } from "@mui/material";
import InvoiceTable from "../core/InvoiceTable";
const LandingPage = () => {
  return (
    <>
      <ClientTable />
      <Box mt={2}>
        <InvoiceTable />
      </Box>
    </>
  );
};

export default LandingPage;
