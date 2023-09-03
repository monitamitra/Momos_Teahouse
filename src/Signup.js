import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { useUserAuth } from "./UserAuthContext";
import { db } from "./Firebase";
import {collection, addDoc} from "firebase/firestore";
import CartHeader from "./CartHeader";
import Footer from "./Footer";

export const Signup = () => {
    const customerCollectionRef = collection(db, "Customers");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {signUp} = useUserAuth();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        createCustomer();
        setError("");
        try {
            await signUp(email, password);
             navigate("/login");
        } catch(error) {
            setError(error.message);
        }
    }

    const createCustomer = async () => {
        await addDoc(customerCollectionRef, {Email: email, RewardsBalance: 0, 
            GiftCardBalance: 0, OrderHistory: []});
    }
  

    const navigate = useNavigate();

    return (
        <div>
        <CartHeader />
        <div className={styles.loginWrapper}>
        <h1>Create an Account</h1>
        {error && window.alert(error)}
        <form onSubmit={handleSubmit}>
            <label>
                <p>Email</p>
                <input type="email" onChange={(e) => {
                   setEmail(e.target.value);
                }}></input>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={(e) => {
                   setPassword(e.target.value);
                }}></input>
            </label>
            <div>
                <button type="submit">Create Account</button>
            </div>
            <div>
            Already have an account? Sign in. 
            <button onClick={() => {
                navigate("/login");
            }}>Log In</button>
            </div>
        </form>
    </div>
    <Footer />
</div>
    )
}