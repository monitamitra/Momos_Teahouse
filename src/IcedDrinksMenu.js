import React from "react";
import styles from "./IcedDrinksMenu.module.css";

import NewItemsMenu from "./NewItemsMenu";
import FavoritesMenu from "./FavoritesMenu";
import MilkTeaMenu from "./MilkTeaMenu";
import FruitTeaMenu from "./FruitTeaMenu";
import CheeseFoamMenu from "./ColdCheeseFoamTeaMenu/CheeseFoamMenu";
import OriginalTeaMenu from "./OriginalTeaMenu";
import OriginalCoffeeMenu from "./OriginalCoffeeMenu";


function IcedDrinksMenu() {

    return (
        <div className={styles.icedDrinks} id="#icedDrinksMenu">
            <h2>Iced Drinks Menu</h2>
            <div className={styles.newItems}>
                <NewItemsMenu />
            </div>
            <div className={styles.favorites}>
                <FavoritesMenu />
            </div>
            <div className={styles.milkTea}>
                <MilkTeaMenu />
            </div>
            <div className={styles.fruitTea}> 
                <FruitTeaMenu />
            </div>
            <div className={styles.cheeseFoam}> 
                <CheeseFoamMenu />
            </div>
            <div className={styles.originalTeas}>
                <OriginalTeaMenu />
            </div>
            <div className={styles.originalCoffees}>
                <OriginalCoffeeMenu />
            </div>
        </div>
    );
}

export default IcedDrinksMenu;