import React from "react";
import styles from "./HotItem.module.css";
import { useNavigate, navigate } from "react-router-dom";

const HotTea = ({hotTea}) => {
    const link = `${hotTea.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();

    return (
    <div id={link} tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }}className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{hotTea.name}</h2>
                <p className={styles.itemPrice}>${hotTea.price}</p>
            </div>
        </div>
    </div>
    );
}

export default HotTea;