import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const validationSchema = Yup.object({
  id: Yup.string().required("ID is required"),
  clientId: Yup.string().required("Client ID is required"),
  date: Yup.date().required("Date is required"),
  services: Yup.array().of(
    Yup.object({
      description: Yup.string().required("Description is required"),
      rate: Yup.number()
        .required("Rate is required")
        .positive("Rate must be positive"),
      currency: Yup.string().required("Currency is required"),
      time: Yup.date().required("Time is required"),
    })
  ),
  payment: Yup.object({
    isPaid: Yup.boolean(),
    amountPaid: Yup.number().required("Amount paid is required"),
    totalAmount: Yup.number().required("Total amount is required"),
    remaining: Yup.number().required("Remaining amount is required"),
  }),
});

const AddServiceData = () => {
  return (
    <Formik
      initialValues={{
        id: "inv1",
        clientId: "c1",
        date: "2025-03-15",
        services: [
          {
            description: "Website Development",
            rate: 1000,
            currency: "$",
            time: "2025-03-10",
          },
        ],
        payment: {
          isPaid: false,
          amountPaid: 500,
          totalAmount: 1000,
          remaining: 500,
        },
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} width={400}>
            <TextField
              label="ID"
              name="id"
              value={values.id}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.id && Boolean(errors.id)}
              helperText={touched.id && errors.id}
            />
            <TextField
              label="Client ID"
              name="clientId"
              value={values.clientId}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.clientId && Boolean(errors.clientId)}
              helperText={touched.clientId && errors.clientId}
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.date && Boolean(errors.date)}
              helperText={touched.date && errors.date}
              InputLabelProps={{ shrink: true }}
            />
            <FieldArray name="services">
              {({ push }) => (
                <>
                  {values.services.map((service, index) => (
                    <Box
                      key={index}
                      display="flex"
                      flexDirection="column"
                      gap={1}
                    >
                      <TextField
                        label="Description"
                        name={`services[${index}].description`}
                        value={service.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.services?.[index]?.description &&
                          Boolean(errors.services?.[index]?.description)
                        }
                        helperText={
                          touched.services?.[index]?.description &&
                          errors.services?.[index]?.description
                        }
                      />
                      <TextField
                        label="Rate"
                        name={`services[${index}].rate`}
                        type="number"
                        value={service.rate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.services?.[index]?.rate &&
                          Boolean(errors.services?.[index]?.rate)
                        }
                        helperText={
                          touched.services?.[index]?.rate &&
                          errors.services?.[index]?.rate
                        }
                      />
                      <TextField
                        select
                        label="Currency"
                        name={`services[${index}].currency`}
                        value={service.currency}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.services?.[index]?.currency &&
                          Boolean(errors.services?.[index]?.currency)
                        }
                        helperText={
                          touched.services?.[index]?.currency &&
                          errors.services?.[index]?.currency
                        }
                      >
                        {["$", "€", "₹"].map((cur) => (
                          <MenuItem key={cur} value={cur}>
                            {cur}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        label="Time"
                        name={`services[${index}].time`}
                        type="date"
                        value={service.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.services?.[index]?.time &&
                          Boolean(errors.services?.[index]?.time)
                        }
                        helperText={
                          touched.services?.[index]?.time &&
                          errors.services?.[index]?.time
                        }
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                  ))}
                </>
              )}
            </FieldArray>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.payment.isPaid}
                  onChange={handleChange}
                  name="payment.isPaid"
                />
              }
              label="Is Paid"
            />
            <TextField
              label="Amount Paid"
              name="payment.amountPaid"
              type="number"
              value={values.payment.amountPaid}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.payment?.amountPaid &&
                Boolean(errors.payment?.amountPaid)
              }
              helperText={
                touched.payment?.amountPaid && errors.payment?.amountPaid
              }
            />
            <TextField
              label="Total Amount"
              name="payment.totalAmount"
              type="number"
              value={values.payment.totalAmount}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.payment?.totalAmount &&
                Boolean(errors.payment?.totalAmount)
              }
              helperText={
                touched.payment?.totalAmount && errors.payment?.totalAmount
              }
            />
            <TextField
              label="Remaining Amount"
              name="payment.remaining"
              type="number"
              value={values.payment.remaining}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.payment?.remaining && Boolean(errors.payment?.remaining)
              }
              helperText={
                touched.payment?.remaining && errors.payment?.remaining
              }
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddServiceData;
