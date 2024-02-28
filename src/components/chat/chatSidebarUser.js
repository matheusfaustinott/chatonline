import React, { useState, useEffect } from 'react';
import ModalLogout from './modalLoggout/modalLoggout';
import './chatSidebarUser.css'; 
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import UserStatusInput from './statusChat';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const ChatSidebarUser = ({ user }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [userStatus, setUserStatus] = useState('');

 useEffect(() => {
 const fetchUserStatus = async () => {
    const userRef = firebase.firestore().collection('users').doc(user.uid);
    const doc = await userRef.get();
    if (doc.exists) {
      setUserStatus(doc.data().statusUser);
    }
 };

 fetchUserStatus();
 }, [user]);

 const handleLogoutClick = () => {
    setIsModalOpen(true);
 };

 const handleCloseModal = () => {
    setIsModalOpen(false);
 };

 const saveStatusToFirebase = async (status) => {
 const userRef = firebase.firestore().collection('users').doc(user.uid);
 await userRef.update({ statusUser: status });
 setUserStatus(status); // Atualiza o estado com o novo status
 };

 return (
    <div className="chat-sidebar-user">
      {user && (
        <>
          <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
          <p className="user-name">{user.displayName}</p>
          <UserStatusInput status={userStatus} onSave={saveStatusToFirebase} />
          <p className="status-user">{userStatus}</p>
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
