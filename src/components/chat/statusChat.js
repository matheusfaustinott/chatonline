import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const UserStatusInput = ({ onSave }) => {
 const [status, setStatus] = useState('');
 const [autoSaveTimeout, setAutoSaveTimeout] = useState(null);
 

 useEffect(() => {
    // Limpa o timeout anterior se existir
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
    }
    // Define um novo timeout para salvar o status automaticamente após 5 segundos
    const timeoutId = setTimeout(() => {
      onSave(status); // Limpa o campo após salvar
    }, 5000); // 5 segundos
    setAutoSaveTimeout(timeoutId);

    // Limpeza do timeout quando o componente for desmontado
 }, [status, onSave]);

 const handleStatusChange = (e) => {
    setStatus(e.target.value);
 };

 const handleClearStatus = () => {
    setStatus('');
 };

 return (
    <div className="user-status-input">
      <input
        type="text"
        value={status}
        onChange={handleStatusChange}
        placeholder="Digite seu status..."
      />
      <button onClick={handleClearStatus}>
        <CloseIcon />
      </button>
    </div>
 );
};

export default UserStatusInput;
