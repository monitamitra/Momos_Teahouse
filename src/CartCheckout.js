import React from "react";
import {useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import CartHeader from "./CartHeader";
import Footer from "./Footer";

const CartCheckout = () => {
    const navigate = useNavigate();

    return (
        <div>
        <CartHeader />
        <div className={styles.CartCheckout}>
            <h1>Your order is on its way!</h1>
            <div>
            <div className={styles.shopping}>
                <button onClick={() => {
                    navigate("/orderonline");
                }}>Go back to shopping!</button>
            </div>
                <div className={styles.rewards}>
                    Earn reward points on your next order with us!
                    <button onClick={() => {
                        navigate("/register");
                    }}>Create an account</button>

                </div>
            </div>
        </div>
        <div className={styles.footer}>
        <Footer />
        </div>
    </div>
    )
}

export default CartCheckout;