import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Stack,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { calculateGST } from "../../hooks/useGst";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectInvoice, setInvoice } from "../../store/slices/toggleSlice";

type TPaymentForm = {
  setToggle: (arg: boolean) => void;
};

const validationSchema = Yup.object({
  amountPaid: Yup.number().required("Amount Paid is required"),
  totalAmount: Yup.number().required("Total Amount is required"),
  isPaid: Yup.boolean().required("Payment status is required"),
});

const PaymentForm = ({ setToggle }: TPaymentForm) => {
  const invoice = useAppSelector(selectInvoice);
  console.log("Invoice:", invoice);
  const dispatch = useAppDispatch();
  const [gst, setGst] = useState(0);
  const [finalCharge, setFinalCharge] = useState(0);
  const formik = useFormik({
    initialValues: {
      amountPaid: "",
      totalAmount: "",
      isPaid: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      console.log("Gst:", gst);
      console.log("Final Charge:", finalCharge);
      dispatch(setInvoice(true))
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: "auto"}}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Total Amount"
          name="totalAmount"
          type="number"
          value={formik.values.totalAmount}
          onChange={(e) => {
            formik.handleChange(e);
            const total = Number(e.target.value);
            if (!isNaN(total) && total > 0) {
              const { gstAmount, finalAmount } = calculateGST(total);
              setGst(gstAmount);
              setFinalCharge(finalAmount);
            } else {
              setGst(0);
              setFinalCharge(0);
            }
          }}
          onBlur={formik.handleBlur}
          error={
            formik.touched.totalAmount && Boolean(formik.errors.totalAmount)
          }
          helperText={formik.touched.totalAmount && formik.errors.totalAmount}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Amount Paid"
          name="amountPaid"
          type="number"
          value={formik.values.amountPaid}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.amountPaid && Boolean(formik.errors.amountPaid)}
          helperText={formik.touched.amountPaid && formik.errors.amountPaid}
        />

        <Typography gutterBottom>Gst Charge: {gst}</Typography>
        <Typography>Final Amount: {finalCharge}</Typography>

        <FormControlLabel
          control={
            <Checkbox
              name="isPaid"
              checked={formik.values.isPaid}
              onChange={formik.handleChange}
            />
          }
          label="Is Paid"
        />
        <Stack direction={"row"} spacing={3} sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
          <Button
            onClick={() => setToggle(true)}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default PaymentForm;
