import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../servicos/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const Header = ({ setUserChat }) => {
 const [user] = useAuthState(auth);
 const [open, setOpen] = useState(false);
 const [emailInput, setEmailInput] = useState("");
 const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
 const [chatsSnapShot] = useCollection(refChat)

 const handleClickOpen = () => {
    setOpen(true);
  };

 const handleClose = () => {
    setOpen(false);
  };

 const handleCreateChat = () => {
    if (!EmailValidator.validate(emailInput)) {
      alert("E-mail inválido!");
      return;
    } else if (emailInput === user.email) {
      alert("Insira um e-mail diferente do seu!");
      return;
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    }).then(() => {
      alert("Amigo adicionado com sucesso!");
      handleClose();
    }).catch((error) => {
      console.error("Error adding friend: ", error);
      alert("Erro ao adicionar amigo. Tente novamente.");
    });
  };
 const chatExists = (emailChat) => {
    return !!chatsSnapShot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
 };

 return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar Amigo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Digite o e-mail do amigo que você deseja adicionar.
          </DialogContentText>
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="E-mail do amigo"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleCreateChat} color="primary">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
 );
};

export default Header;
