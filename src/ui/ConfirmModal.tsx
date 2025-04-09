import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectRemoveClientModal,
  setRemoveClientModal,
} from "../store/slices/toggleSlice";
import { Stack, Typography } from "@mui/material";
import { removeClient, selectClients } from "../store/slices/updateClientSlice";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "400px",
  height: "100px",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "background.paper",
  border: "1px solid #000",
  //   borderRadius: "10px",
  boxShadow: 24,
  py: 0,
};

export default function ConfirmModal({ clientId }: { clientId: string }) {
  const [client, setClient] = useState("");
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(setRemoveClientModal(false));
  const open1 = useAppSelector(selectRemoveClientModal);

  const clients = useAppSelector(selectClients);

  useEffect(() => {
    const getClient = clients.filter(
      (clientData) => clientData.id === clientId
    );
    setClient(getClient[0]?.name);
  }, [clientId, clients]);

  return (
    <>
      <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Are You Removing Mr. {client} ?</Typography>
          <Stack direction={"row"} spacing={3}>
            <CheckIcon
              onClick={() => {
                dispatch(setRemoveClientModal(false));
                dispatch(removeClient(clientId));
              }}
              sx={{ cursor: "pointer" }}
            />
            <CloseIcon
              onClick={() => {
                dispatch(setRemoveClientModal(false));
              }}
              sx={{ cursor: "pointer" }}
            />
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
