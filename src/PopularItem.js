import React from "react";
import styles from "./PopularCircle.module.css";

const PopularItem = ({popularItem}) => {
    return (
        <div className={styles.Tea}>
        <div className={styles.imageContainer}>
            <img src={popularItem.imageSrc} alt="popular tea"></img>
        </div>
        <h2>{popularItem.name}</h2>
    </div>
    );
}

export default PopularItem;