import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../servicos/config';
import ChatSidebarUser from './chatSidebarUser';

import './sidebar.css';
import Header from './headerSide';
import Body from './boddySide';


const Sidebar = () => {
 const [user] = useAuthState(auth);

 return (
    <div className="chat-container">
      <div className="header">
        <Header/>
      </div>
      <div className="boddy">
        <Body/>
      </div>
      <div className="footer">
        <ChatSidebarUser user={user} />
      </div>
    </div>
 );
};

export default Sidebar;
