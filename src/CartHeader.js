import React from "react";
import styles from "./OrderOnlineHeader.module.css";
import CartButton from "./CartButton";
import {useNavigate} from "react-router-dom";
import GiftCardButton from "./GiftCardButton";
import AccountButton from "./AccountButton";
import AccountDashboardButton from "./AccountDashboardButton";

function CartHeader() {
    const navigate = useNavigate();
    return (
        <div className={styles.Cart}>
        <div className={styles.title} tabIndex="1" onClick={() => {
            navigate("/");
        }}>
        <h1 className={styles.uppertitle}>Momo's</h1>
        <p className={styles.lowertitle}>Teahouse</p>
        </div>
        <div className={styles.giftcardButton}>
            <GiftCardButton />
        </div>
        <div className={styles.cartButton}>
            <CartButton />
        </div>
        <div className={styles.accountButton}>
            <AccountButton />
        </div>
        <div className={styles.accountDashboard}>
            <AccountDashboardButton />
        </div>
    </div>
    )
}

export default CartHeader;