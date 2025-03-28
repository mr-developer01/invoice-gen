import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Stack, FormControlLabel, Checkbox } from "@mui/material";
import { calculateGST } from "../../hooks/useGst";

const validationSchema = Yup.object({
  amountPaid: Yup.number().required("Amount Paid is required"),
  totalAmount: Yup.number().required("Total Amount is required"),
  isPaid: Yup.boolean().required("Payment status is required"),
});

const PaymentForm = ({ setToggle }) => {
  const formik = useFormik({
    initialValues: {
      amountPaid: "",
      totalAmount: "",
      isPaid: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      const gst = calculateGST(500)
      console.log(gst)
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: "auto" }}>
      <form onSubmit={formik.handleSubmit}>
      <TextField
          fullWidth
          margin="normal"
          label="Total Amount"
          name="totalAmount"
          type="number"
          value={formik.values.totalAmount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.totalAmount && Boolean(formik.errors.totalAmount)}
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
