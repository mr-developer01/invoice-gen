import * as React from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectSnack, selectSnackMsg, setSnack } from "../store/slices/toggleSlice";

export default function SimpleSnackbar() {
//   const [open, setOpen] = React.useState(true);
  const dispatch = useAppDispatch()
  const open = useAppSelector(selectSnack)
  const msg = useAppSelector(selectSnackMsg)

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnack(false))
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={msg}
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </div>
  );
}
