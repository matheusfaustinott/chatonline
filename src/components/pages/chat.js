import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../servicos/config';
import ChatSidebarUser from '../chat/chatSidebarUser';


const Chat = () => {
 const [user] = useAuthState(auth);

 return (
    <div className="chat-container">
      <div className="sidebar">
        {/* Conteúdo do sidebar */}
      </div>
      <div className="main-content">
        {/* Conteúdo principal */}
      </div>
      <div className="footer">
        <ChatSidebarUser user={user} />
      </div>
    </div>
 );
};

export default Chat;
