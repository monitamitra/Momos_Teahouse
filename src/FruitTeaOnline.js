import React from "react";
import styles from "./Item.module.css";
import {useNavigate} from "react-router-dom";

const FruitTea = ({fruitTea}) => {
    const link = `${fruitTea.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();
    return (
    <div tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }} className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.imageContainer}>
                <img src={fruitTea.imageSrc} alt="new item"></img>
            </div>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{fruitTea.name}</h2>
                <p className={styles.itemPrice}>${fruitTea.price}</p>
                <p className={styles.itemDescription}>{fruitTea.description}</p>
            </div>
        </div>
    </div>
    );
}

export default FruitTea;