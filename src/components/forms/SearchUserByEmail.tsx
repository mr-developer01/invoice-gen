import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useDispatch } from "react-redux";
import { getClient } from "../../store/slices/updateClientSlice";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const SearchUserByEmail = () => {
    const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(getClient(values.email))
        resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form className="search-user">
          <Box>
            
            <Box display="flex" alignItems={"flex-start"} gap={2} width={{xs: 300, md: 500}}>
              <TextField
                label="Search User By Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />
              <Box sx={{ mt: 1 }}>
                <Button type="submit" variant="contained" color="primary">
                  <PersonSearchIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SearchUserByEmail;
