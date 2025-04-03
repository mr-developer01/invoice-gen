import { Button, Stack } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { setClientModal, setTheme } from "../../store/slices/toggleSlice";
import { Link } from "react-router";  

const BasicSidebar = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Stack
        sx={{
          flex: 1,
          bgcolor: "background.default",
          justifyContent: "space-between",
          py: { xs: 1, md: 4 },
          px: 2,
          alignItems: "center",
        }}
        direction={{ xs: "row", md: "column" }}
      >
        <Stack spacing={3} direction={{ xs: "row", md: "column" }}>
          <Button
            variant="contained"
            onClick={() => dispatch(setClientModal(true))}
          >
            Add Client
          </Button>
          <Button variant="contained" component={Link} to="/invoices">
            Create Invoice
          </Button>
        </Stack>
        <Stack>
          <Button variant="outlined" onClick={() => dispatch(setTheme())}>
            Change Theme
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default BasicSidebar;
