import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../servicos/config';
import ChatSidebarUser from './chatSidebarUser';
import BoddySide from './boddySide';
import HeaderSide from './headerSide';
import './sidebar.css';


const Sidebar = () => {
 const [user] = useAuthState(auth);

 return (
    <div className="chat-container">
      <div className="header">
        <HeaderSide/>
      </div>
      <div className="boddy">
        <BoddySide/>
      </div>
      <div className="footer">
        <ChatSidebarUser user={user} />
      </div>
    </div>
 );
};

export default Sidebar;
