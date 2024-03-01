import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../servicos/config";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "./sidebarItens"

const Body = ({ setUserChat, userChat }) => {
 const [user] = useAuthState(auth);
 const refChat = db
 .collection("chats")
 .where("users", "array-contains", user.email);

 const [chatsSnapshot] = useCollection(refChat);

 return (
  <div>
    {chatsSnapshot?.docs.map((item, index) => (
      <div key={index}>
        <SidebarChatsItem
          id={item.id}
          users={item.data().users}
          user={user}
          setUserChat={setUserChat}
          active={userChat?.chatId === item.id ? "active" : ""}
        />
        <hr />
      </div>
    ))}
  </div>
  );
};

export default Body;
