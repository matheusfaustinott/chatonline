import React from 'react';

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
 // Função para lidar com o clique no item do chat
 const handleChatClick = () => {
    setUserChat({ chatId: id, users });
 };

 // Extrai o nome do usuário atual para exibir corretamente
 const currentUser = users.find(u => u.email === user.email);
 const otherUser = users.find(u => u.email !== user.email);

 // Estilos inline para o componente
 const chatItemStyle = {
   padding: '10px',
   borderBottom: '1px solid #ddd',
   cursor: 'pointer',
   backgroundColor: active ? '#f0f0f0' : '#fff',
 };

 const userAvatarStyle = {
   width: '40px',
   height: '40px',
   borderRadius: '50%',
   marginRight: '10px',
 };

 const chatInfoStyle = {
   display: 'flex',
   flexDirection: 'column',
 };

 const userNameStyle = {
   fontWeight: 'bold',
 };

 const lastMessageStyle = {
   fontSize: '0.8em',
   color: '#888',
 };

 return (
    <div style={chatItemStyle} onClick={handleChatClick}>
      <img src={currentUser.avatar} alt="Avatar do usuário" style={userAvatarStyle} />
      <div style={chatInfoStyle}>
        <span style={userNameStyle}>{otherUser.name}</span>
        <span style={lastMessageStyle}>Última mensagem...</span> {/* Substitua por uma lógica real para exibir a última mensagem */}
      </div>
    </div>
 );
};

export default SidebarChatsItem;
