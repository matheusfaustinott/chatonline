import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// config do firebase que eu peguei do site, com a autenticação 
const firebaseConfig = {
    apiKey: "AIzaSyBrEc_yUV5xcacYSeh9ny2pyCWcqqyeLNA",
    authDomain: "chatteste-dfc65.firebaseapp.com",
    projectId: "chatteste-dfc65",
    storageBucket: "chatteste-dfc65.appspot.com",
    messagingSenderId: "1025590086074",
    appId: "1:1025590086074:web:3bf6f129a96e77d0c2f583",
    measurementId: "G-BHRZV9LDQG"
};

const app = firebase.initializeApp(firebaseConfig); // inicia o firebase

const db = app.firestore(); // cria a instancia do firestore
const auth = app.auth(); // instancia de autenticação
const provider = new firebase.auth.GoogleAuthProvider(); // gerenciar autenticação dos usuários
export {
    db,
    auth,
    provider
}
