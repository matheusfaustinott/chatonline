import React from "react";
import { db } from "../../servicos/config";
import { useCollection } from "react-firebase-hooks/firestore";

const getUser = (users, userLogged) =>
 users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [getUserItem] = useCollection(
      db.collection("users").where("email", "==", getUser(users, user))
  );

 const Avatar = getUserItem?.docs?.[0]?.data();
 const item = getUser(users, user);

 const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
 };

 return (
    <div onClick={handleNewChat} className={active}>
      {Avatar ? <img src={Avatar?.photoURL} alt="User Avatar" /> : <div>No Avatar</div>}
      <span>{item.split("@")[0]}</span>
    </div>
 );
};

export default SidebarChatsItem;
