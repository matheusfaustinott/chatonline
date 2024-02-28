import React, { useEffect } from "react";
import CircularWithValueLabel from "./components/loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./servicos/config";
import Chat from "./components/pages/chat";
import NewsletterPage from "./components/pages/newslatter";

const App = () => {
    const [user, loading] = useAuthState(auth);
   
    useEffect(() => {
       if (user) {
         db.collection("users").doc(user.uid).set({
           email: user.email,
           photoURL: user.photoURL,
         });
        
       }
    }, [user]);
   
    if (loading) return <CircularWithValueLabel />;
   
    if (!user) return <NewsletterPage />;
   
    return (
        <Chat/>
       
    );
};

export default App;
