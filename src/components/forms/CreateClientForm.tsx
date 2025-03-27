import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, MenuItem } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { addClient } from "../../store/slices/clientSlice";

const validationSchema = Yup.object({
  id: Yup.string().required("ID is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.number().typeError("Must be a number").required("Phone is required"),
  countryCode: Yup.string().required("Country Code is required"),
  address: Yup.string().required("Address is required"),
});

const countryCodes = ["+1", "+91", "+44", "+61", "+81"];

const CreateClientForm = () => {
    const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={{ id: "", name: "", email: "", phone: "", countryCode: "", address: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // console.log("Form Data:", values);
        const newUser = {
            id: values.id,
            name: values.name,
            email: values.email,
            phone: values.countryCode + values.phone,
            address: values.address
        }
        console.log(newUser)
        dispatch(addClient(newUser))
      }}
    >
      {({ errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="ID"
              name="id"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.id && Boolean(errors.id)}
              helperText={touched.id && errors.id}
            />
            <TextField
              label="Name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              select
              label="Country Code"
              name="countryCode"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.countryCode && Boolean(errors.countryCode)}
              helperText={touched.countryCode && errors.countryCode}
            >
              {countryCodes.map((code) => (
                <MenuItem key={code} value={code}>
                  {code}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Phone"
              name="phone"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
            />
            <TextField
              label="Address"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
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

export default CreateClientForm;
