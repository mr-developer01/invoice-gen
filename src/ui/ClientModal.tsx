import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectClientModal, setClientModal } from '../store/slices/toggleSlice';
import CreateClientForm from '../components/forms/CreateClientForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function ClientModal() {
  const dispatch = useAppDispatch()
  const handleClose = () => dispatch(setClientModal(false));
  const open1 = useAppSelector(selectClientModal)

  return (
    <>
      <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateClientForm />
        </Box>
      </Modal>
    </>
  );
}
