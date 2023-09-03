import React from "react";
import styles from "./HotItem.module.css";
import {navigate, useNavigate} from "react-router-dom";
import PopupDiv from "./PopupDivHotMilkTea";

const HotCoffee = ({hotCoffee}) => {
    const link = `${hotCoffee.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();

    return (
    <div id={link} tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }} className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{hotCoffee.name}</h2>
                <p className={styles.itemPrice}>${hotCoffee.price}</p>
            </div>
        </div>
    </div>
    );
}

export default HotCoffee;