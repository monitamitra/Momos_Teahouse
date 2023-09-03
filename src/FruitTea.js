import React from "react";
import styles from "./TeaSquare.module.css";

const FruitTea = ({fruitTea}) => {
    return (
        <div className={styles.Tea}>
        <div className={styles.imageContainer}>
            <img src={fruitTea.imageSrc} alt="fruit tea"></img>
        </div>
        <h2>{fruitTea.name}</h2>
    </div>
    );
}

export default FruitTea;