import React from "react";
import styles from "./HotItem.module.css";
import {useNavigate} from "react-router-dom";

const HotMilkTea = ({hotMilkTea}) => {
    const link = `${hotMilkTea.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();
    return (
    <div id={link} tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }} className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{hotMilkTea.name}</h2>
                <p className={styles.itemPrice}>${hotMilkTea.price}</p>
            </div>
        </div>

    </div>
    );
}

export default HotMilkTea;