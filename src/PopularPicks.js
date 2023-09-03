import React from "react";
import styles from "./PopularPicks.module.css";
import {PopularFlavors} from "./PopularFlavors";
import PopularItemsList from "./PopularItemsList";
import MenuButton from "./MenuButton";

function PopularItems() {

    return (
        <div>
            <div className={styles.popularItems}>
                    <h2>Our Top 5 Picks</h2>
                    <PopularItemsList PopularItems={PopularFlavors}/>
                <div className={styles.menuButton}>
                    <MenuButton />
                </div>
            </div>
        </div>
    );
}

export default PopularItems;