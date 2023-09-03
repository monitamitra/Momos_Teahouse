import React from "react";
import styles from "./TeaSquare.module.css";

const MilkTea = ({milkTea}) => {
    return (
        <div className={styles.Tea}>
        <div className={styles.imageContainer}>
            <img src={milkTea.imageSrc} alt="milk tea"></img>
        </div>
        <h2>{milkTea.name}</h2>
    </div>
    );
}

export default MilkTea;