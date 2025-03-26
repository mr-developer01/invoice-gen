import { Button, Stack } from "@mui/material";
import React from "react";
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
          py: 4,
          px: 2,
        }}
      >
        <Stack spacing={3}>
          <Button variant="contained" onClick={() => dispatch(setClientModal(true))}>Add Client</Button>
          <Button variant="contained" LinkComponent={Link} to="/invoices">Create Invoice</Button>
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
