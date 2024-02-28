import React, { useState } from 'react';
import ModalLogout from './modalLoggout/modalLoggout';
import './chatSidebarUser.css'; 
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const ChatSidebarUser = ({ user }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleLogoutClick = () => {
    setIsModalOpen(true);
 };

 const handleCloseModal = () => {
    setIsModalOpen(false);
 };

 return (
    <div className="chat-sidebar-user">
      {user && (
        <>
          <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
          <p className="user-name">{user.displayName}</p>
        </>
      )}
      <div className="logout-button" onClick={handleLogoutClick}>
        <ExitToAppIcon/>
      </div>
      <ModalLogout isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
 );
};

export default ChatSidebarUser;
