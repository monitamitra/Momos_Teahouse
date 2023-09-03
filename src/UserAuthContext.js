import React, {createContext, useContext, useEffect, useState} from "react";
import {signInWithPhoneNumber,
    signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
    import {Auth} from "./Firebase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState();
    const [giftCardPurchase, setGiftCardPurchase] = useState(0);
    const [rewardPurchase, setRewardPurchase] = useState(0);

    function signUp(email, password) {
        createUserWithEmailAndPassword(Auth, email, password);
    }

    function login(email, password) {
        signInWithEmailAndPassword(Auth, email, password);
    }

    function logout() {
        return signOut(Auth);
    }

    

    useEffect(() => {
        const LoginUser = onAuthStateChanged(Auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            LoginUser();
        }

    }, []);

    return (
        <UserAuthContext.Provider value={{user, rewardPurchase, setRewardPurchase, 
            giftCardPurchase, setGiftCardPurchase, login, signUp, logout}}>
            {children}
        </UserAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(UserAuthContext);
}