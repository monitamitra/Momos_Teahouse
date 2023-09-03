import React from "react";
import styles from "./GiftCard.module.css";
import GiftCardForm from "./GiftCardForm";
import Footer from "./Footer";

const GiftCard = () => {
    return (
    <div>
        <div className={styles.GiftCardHeader}>
                <h1>Momo's</h1>
                <p>Teahouse</p>
        </div>
        <div className={styles.imageContainer}>
            <img alt="fruit"
            src="https://assets.epicurious.com/photos/5693d446f9cdb5cd268b7386/6:4/w_1600,c_limit/EP_01112016_Citrus_-hero6x4.jpg">
            </img>
        </div>
        <div className={styles.GiftCard}>
            <div className={styles.form}>
            <GiftCardForm />
            </div>
        </div>
        <div className={styles.GiftCardFooter}>
        <Footer />
    </div>
</div>
    );
}

export default GiftCard;