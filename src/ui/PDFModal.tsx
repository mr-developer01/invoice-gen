import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectPdfModal, setPdfModal } from "../store/slices/toggleSlice";
import MyDocument from "../components/core/MyDocument";
import { PDFViewer } from "@react-pdf/renderer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "70%",
  height: "90%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
//   borderRadius: "10px",
  boxShadow: 24,
  py: 0,
};

type TClientModal = {
  invId?: string;
};

export default function PDFModal({ invId }: TClientModal) {
  console.log(invId, "coming from modal...");
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(setPdfModal(false));
  const open1 = useAppSelector(selectPdfModal);

  return (
    <>
      <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PDFViewer style={{width: "100%", height: "100%"}}>
            <MyDocument />
          </PDFViewer>
        </Box>
      </Modal>
    </>
  );
}
