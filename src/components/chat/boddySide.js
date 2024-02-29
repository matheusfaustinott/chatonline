import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../servicos/config";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "./sidebarItens"

const Body = ({ setUserChat, userChat }) => {
 const [user] = useAuthState(auth);
 const [friendsSnapshot] = useCollection(db.collection("friends").doc(user.email));
 const [chats, setChats] = useState([]);

 useEffect(() => {
    const fetchChats = async () => {
      if (friendsSnapshot) {
        const friendsChatsPromises = friendsSnapshot.docs.map((doc) => {
          const refChat = db.collection("chats").where("users", "array-contains", doc.data().email);
          return refChat.get();
        });

        const friendsChatsSnapshots = await Promise.all(friendsChatsPromises);
        const friendsChats = friendsChatsSnapshots.flatMap((snapshot) =>
          snapshot.docs.map((doc) => ({
            id: doc.id,
            users: doc.data().users,
          }))
        );

        setChats(friendsChats);
      }
    };

    fetchChats();
 }, [friendsSnapshot]);

 return (
    <div>
      {chats.map((chat, index) => (
        <SidebarChatsItem
          key={index}
          id={chat.id}
          users={chat.users}
          user={user}
          setUserChat={setUserChat}
          active={userChat?.chatId === chat.id ? "active" : ""}
        />
      ))}
    </div>
 );
};

export default Body;
