import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Item.module.css";

const CheeseFoam = ({cheeseFoam}) => {
    const link = `${cheeseFoam.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();

    return (
    <div id={link} tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }} className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.imageContainer}>
                <img src={cheeseFoam.imageSrc} alt="new item"></img>
            </div>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{cheeseFoam.name}</h2>
                <p className={styles.itemPrice}>${cheeseFoam.price}</p>
                <p className={styles.itemDescription}>{cheeseFoam.description}</p>
            </div>
        </div>
    </div>
    );
}

export default CheeseFoam;