import { Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import PaymentForm from "../forms/PaymentForm";
import { selectTheme } from "../../store/slices/toggleSlice";
import { useAppSelector } from "../../store/hooks";

type TId = {
  id: string
}

const AddPayment = ({id}: TId) => {
  const [toggle, setToggle] = useState(true);
  const theme = useAppSelector(selectTheme);
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography>Add Payment</Typography>
      {toggle && (
        <Stack
          sx={{
            width: { xs: 200, md: 400 },
            height: 200,
            border: theme === 'light' ? "1px dashed black" : "1px dashed white",
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
