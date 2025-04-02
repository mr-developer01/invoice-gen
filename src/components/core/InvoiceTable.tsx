import { Box, Typography } from "@mui/material";
import BasicInvoiceTable from "../../ui/BasicInvoiceTable";

const InvoiceTable = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="body2" sx={{ textAlign: "center" }} gutterBottom>
          Invoice's Table
        </Typography>
        <BasicInvoiceTable />
      </Box>
    </>
  );
};

export default InvoiceTable;
