import React from 'react';
import { auth } from '../../../servicos/config';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  alpha: 7,
 };
 

const ModalLogout = ({ isOpen, onClose }) => {
 const handleLogout = () => {
    auth.signOut();
    console.log('Logout');
    onClose();
 };

 return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-logout-title"
      aria-describedby="modal-logout-description"
    >
      <Box sx={style}>
        <h2 id="modal-logout-title">Deseja fazer logout?</h2>
        <p id="modal-logout-description">
          Clique em "Sim" para confirmar o logout.
        </p>
        <Button onClick={onClose}>Não</Button>
        <Button onClick={handleLogout}>Sim</Button>
      </Box>
    </Modal>
 );
};

export default ModalLogout;
