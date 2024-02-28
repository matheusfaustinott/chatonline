import React from 'react';
import { auth } from '../../../servicos/config';

const ModalLogout = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleLogout = () => {
    auth.signOut();
    console.log('Logout');
    onClose();
  };

  return (
    <div className="modal-logout">
      <div className="modal-content">
        <h2>Deseja fazer logout?</h2>
        <button onClick={onClose}>Não</button>
        <button onClick={handleLogout}>Sim</button>
      </div>
    </div>
  );
};

export default ModalLogout;
