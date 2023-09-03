import React from "react";
import styles from "./Item.module.css";
import {useNavigate} from "react-router-dom";

const MilkTea = ({milkTea}) => {
    const link = `${milkTea.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();
    
    return (
    <div id={link} tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }}className={styles.ItemContainer}>
        <div  className={styles.Item}>
            <div className={styles.imageContainer}>
                <img src={milkTea.imageSrc} alt="new item"></img>
            </div>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{milkTea.name}</h2>
                <p className={styles.itemPrice}>${milkTea.price}</p>
                <p className={styles.itemDescription}>{milkTea.description}</p>
            </div>
        </div>
    </div>
    );
}

export default MilkTea;