import React from "react";
import styles from "./OrderOnlineHeader.module.css";
import CartHeader from "./CartHeader";

function Header({location}) {
   const menuItems =  (
        <div className={styles.Header}>
            <CartHeader />
            <div className={styles.location}>
            <h2>{`Momo's Teahouse ${localStorage.getItem("location")}`}</h2>
           </div>
        </div>
    );
    

    return menuItems;
}

export default Header;