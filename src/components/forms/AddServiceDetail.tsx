import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, MenuItem, Button, Box, Stack } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { addInvoices, addNewService } from "../../store/slices/invoiceSlice";

type TProps = {
  id: string;
  setToggle: (arg: boolean) => void;
};

const validationSchema = Yup.object({
  description: Yup.string().required("Description is required"),
  rate: Yup.number()
    .typeError("Rate must be a number")
    .required("Rate is required")
    .min(100),
  currency: Yup.string()
    .oneOf(["$", "₹"], "Invalid currency")
    .required("Currency is required"),
  time: Yup.date().typeError("Invalid date").required("Time is required"),
});

const AddServiceDetail = ({ id, setToggle }: TProps) => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      description: "",
      rate: "",
      currency: "",
      time: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values: Rahul", values);
      const invoice = {
        id: "inv4",
        clientId: id,
        date: values.time,
        services: [
          {
            description: values.description,
            rate: Number(values.rate),
            currency: values.currency,
            time: values.time,
          },
        ],
        payment: {
          isPaid: false,
          amountPaid: 0,
          totalAmount: 0,
          remaining: 0,
        },
      };
      console.log("Invoice Data:", invoice);
      dispatch(addNewService([invoice]))
    },
  });

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ maxWidth: 400, mx: "auto" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Rate"
          name="rate"
          type="number"
          value={formik.values.rate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.rate && Boolean(formik.errors.rate)}
          helperText={formik.touched.rate && formik.errors.rate}
        />
        <TextField
          fullWidth
          select
          margin="normal"
          label="Currency"
          name="currency"
          value={formik.values.currency}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.currency && Boolean(formik.errors.currency)}
          helperText={formik.touched.currency && formik.errors.currency}
        >
          <MenuItem value="$">$</MenuItem>
          <MenuItem value="₹">₹</MenuItem>
        </TextField>
        <TextField
          fullWidth
          margin="normal"
          label="Time"
          name="time"
          type="date"
          InputLabelProps={{ shrink: true }}
          inputProps={{ min: today }}
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.time && Boolean(formik.errors.time)}
          helperText={formik.touched.time && formik.errors.time}
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

export default AddServiceDetail;
