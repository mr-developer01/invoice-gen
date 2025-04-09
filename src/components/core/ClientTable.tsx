import { Box, Typography } from "@mui/material";
import StickyHeadTable from "../../ui/BasicTableClient";

const ClientTable = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="body2" sx={{ textAlign: "center" }} gutterBottom>
          Client's Table
        </Typography>
        <StickyHeadTable />
      </Box>
    </>
  );
};

export default ClientTable;
