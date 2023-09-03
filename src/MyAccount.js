import React, {useState, useEffect} from "react";
import {db} from "./Firebase";
import {collection, getDocs} from "firebase/firestore";
import { useUserAuth } from "./UserAuthContext";
import styles from "./MyAccount.module.css";
import CartHeader from "./CartHeader";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export const MyAccount = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const customerCollectionRef = collection(db, "Customers");

    const {user} = useUserAuth();

    useEffect(() => {
        const getCustomers = async () => {
            const data = await getDocs(customerCollectionRef);
            setCustomers(data.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )))
        }

        getCustomers();
    }, [customerCollectionRef])

    if (!user) {
        return (
        <div>
            <CartHeader />
            <div className={styles.notLoggedIn}>
                <h1>Uh oh! Looks like you are not logged in</h1>
                <button onClick={() => {
                    navigate("/login");
                }}>Log in</button>
            </div>
            <Footer />
        </div>
        )
    }

    let currUser = "";

    for (let i = 0; i < customers.length; i++) {
        if (customers[i].Email === user.email) {
            currUser = customers[i];
        }
    }
    

    return (
    <div>
        <CartHeader />
        <div className={styles.container}>
            <h1>My Account</h1>
            <div className={styles.numbers}>
                <h2>Rewards Balance</h2>
                <p>{currUser.RewardsBalance} points</p>
            </div>
            <div className={styles.numbers}>
                <h2>Gift Card Balance</h2>
                <p>${currUser.GiftCardBalance}</p>
            </div>
        </div>
        <Footer />
    </div>
    )
}

