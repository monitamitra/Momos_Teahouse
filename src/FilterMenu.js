import React from "react";
import IcedDrinksButton from "./IcedDrinksButton";
import HotDrinksButton from "./HotDrinksButton";
import styles from "./FilterMenu.module.css";
import NavBar from "./SideMenuNavBar";

function FilterMenu({location}) {
    const menu =  (
    <div className={styles.menuOptions}>
        <div className={styles.iceDrinks}>
                <IcedDrinksButton />
        </div> 
        <div className={styles.hotDrinks}>
            <HotDrinksButton />
        </div>  
        <div className={styles.navBar}>
            <NavBar location={location}/>
        </div>
    </div>
    );
    return menu;
}

export default FilterMenu;
