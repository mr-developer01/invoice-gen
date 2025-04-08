import { Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectTheme,
  setClientModal,
  setTheme,
} from "../../store/slices/toggleSlice";
import { Link } from "react-router";
import { Moon, Sun } from "lucide-react";

const BasicSidebar = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  console.log(theme)
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
        <Stack sx={{ cursor: "pointer", mr: {xs: '20px', sm: '30px', md: '0px'} }}>
          {theme === "light" ? (
            <Moon onClick={() => dispatch(setTheme())} />
          ) : (
            <Sun onClick={() => dispatch(setTheme())} />
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default BasicSidebar;
