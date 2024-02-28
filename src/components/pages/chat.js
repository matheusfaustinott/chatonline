import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../servicos/config';
import ChatSidebarUser from '../chat/chatSidebarUser';
import Sidebar from '../chat/sidebar';


const Chat = () => {
 const [user] = useAuthState(auth);
 const [setUserChat,userChat] = useState(null);
 return (
    <div className="chat-container">
      <div className="sidebar">
        <Sidebar setUserChat = {setUserChat} userChat={userChat}/>
      </div>
      <div className="main-content">
        {/* Conteúdo principal */}
      </div>
      <div className="footer">
        {/* <ChatSidebarUser user={user} /> */}
      </div>
    </div>
 );
};

export default Chat;
