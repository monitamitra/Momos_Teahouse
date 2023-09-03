import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Item.module.css";

const CustomerFavorite = ({customerFavorite}) => {
    const link = `${customerFavorite.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();

    return (
    <div id={link} tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }} className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.imageContainer}>
                <img src={customerFavorite.imageSrc} alt="new item"></img>
            </div>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{customerFavorite.name}</h2>
                <p className={styles.itemPrice}>${customerFavorite.price}</p>
                <p className={styles.itemDescription}>{customerFavorite.description}</p>
            </div>
        </div>
    </div> 
    );
}

export default CustomerFavorite;