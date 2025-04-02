import { Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import PaymentForm from "../forms/PaymentForm";

type TId = {
  id: string
}

const AddPayment = ({id}: TId) => {
  const [toggle, setToggle] = useState(true);
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography>Add Payment</Typography>
      {toggle && (
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
          onClick={() => setToggle(false)}
        >
          <AddIcon sx={{ fontSize: "70px" }}/>
        </Stack>
      )}
      {
        !toggle && <PaymentForm id={id} setToggle={setToggle} />
      }
    </Stack>
  );
};

export default AddPayment;
