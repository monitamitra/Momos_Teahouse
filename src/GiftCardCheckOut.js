import React from "react";
import styles from "./GiftCardCheckout.module.css";
import GiftCardCheckOutForm from "./GiftCardCheckoutForm";
import Footer from "./Footer";

const GiftCardCheckOut = () => {
    return (
        <div className={styles.main}>
        <div className={styles.GiftCardHeader}>
                <h1>Momo's</h1>
                <p>Teahouse</p>
        </div>
        <div className={styles.imageContainer}>
            <img 
            src="https://assets.epicurious.com/photos/5693d446f9cdb5cd268b7386/6:4/w_1600,c_limit/EP_01112016_Citrus_-hero6x4.jpg">
            </img>
        </div>
        <div className={styles.GiftCard}>
            <div className={styles.form}>
                <GiftCardCheckOutForm />
            </div>
        </div>
        <div className={styles.GiftCardFooter}>
        <Footer />
    </div>
</div>
    );
}

export default GiftCardCheckOut;