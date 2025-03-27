import { Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddPayment = () => {
  return (
    <Stack sx={{alignItems: 'center'}}>
        <Typography>Add Payment</Typography>
      <Stack
        sx={{
          width: { xs: 200, md: 400 },
          height: 200,
          border: "1px dashed white",
          borderRadius: "10px",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <AddIcon sx={{ fontSize: "70px" }} />
      </Stack>
    </Stack>
  );
};

export default AddPayment;
