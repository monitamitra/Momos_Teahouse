import React from "react";
import Header from "./OrderOnlineHeader";
import IcedDrinksMenu from "./IcedDrinksMenu";
import HotDrinksMenu from "./HotDrinksMenu";
import styles from "./OrderOnline.module.css"
import FilterMenu from "./FilterMenu";
import Footer from "./Footer";
import $ from "jquery";

function OrderOnline({location}) {

   const menuItems =  (
        <div className={styles.ItemOrder}> 
            <Header location={location} id="OrderOnlineHeader"/>
            <div id="FilterMenu" className={styles.menuOptions}>
                <FilterMenu />
            </div>
            <div className={styles.menu} id="icedDrinksMenu">
                <IcedDrinksMenu />
            </div>
            <div className={styles.menu}>
                <HotDrinksMenu />
            </div>
            <Footer />
        </div>
    );

    return menuItems;
}

export default OrderOnline;