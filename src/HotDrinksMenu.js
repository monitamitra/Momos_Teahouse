import React from "react";
import styles from "./HotDrinksMenu.module.css";
import HotMilkTeaMenu from "./HotMilkTeaMenu";
import HotTeaMenu from "./HotTeaMenu";
import HotCoffeeMenu from "./HotCoffeeMenu";

const HotDrinksMenu = () => {
    const menuItems =  (
        <div className={styles.hotDrinks} id="hotDrinksMenu">
            <h2>Hot Drinks Menu</h2>
            <div className={styles.hotMilkTea}>
                <HotMilkTeaMenu />
            </div>
            <div className={styles.hotTea}>
                <HotTeaMenu />
            </div>
            <div className={styles.hotCoffee}>
                <HotCoffeeMenu />
            </div>
        </div>
    );
    

    return menuItems;
}

export default HotDrinksMenu;