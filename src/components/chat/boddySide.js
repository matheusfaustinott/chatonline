import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../servicos/config";
import SidebarChatsItem from "./sidebarItens";
import {useCollection} from "react-firebase-hooks/firestore"


const Body = ({ setUserChat, userChat }) => {
 const [user] = useAuthState(auth);

 // Busca os amigos do usuário atual
 const refFriends = db.collection("friends").doc(user.email);
 const [friendsSnapshot] = useCollection(refFriends);

 // Função para buscar os chats com um amigo específico
//  const getChatsWithFriend = async (friendEmail) => {
//     const refChat = db
//       .collection("chats")
//       .where("users", "array-contains", friendEmail);
//     const [chatsSnapshot] = useCollection(refChat);
//     return chatsSnapshot?.docs.map((item) => ({
//       id: item.id,
//       users: item.data().users,
//     }));
//  };

 // Busca os chats com cada amigo
 const [chats, setChats] = React.useState([]);
 React.useEffect(() => {
    const fetchChats = async () => {
      const friendsChats = await Promise.all(
        friendsSnapshot?.docs.map((doc) =>
          getChatsWithFriend(doc.data().email)
        )
      );
      setChats(friendsChats.flat());
    };
    if (friendsSnapshot) {
      fetchChats();
    }
 }, [friendsSnapshot]);

 return (
    <div>
      {chats.map((chat, index) => (
        <div key={index}>
          <SidebarChatsItem
            id={chat.id}
            users={chat.users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === chat.id ? "active" : ""}
          />
        </div>
      ))}
    </div>
 );
};

export default Body;
