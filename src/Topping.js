import React from "react";
import styles from "./TeaSquare.module.css";

const Topping = ({topping}) => {
    return (
        <div className={styles.Tea}>
        <div className={styles.imageContainer}>
            <img src={topping.imageSrc} alt="milk swirl tea"></img>
        </div>
        <h2>{topping.name}</h2>
        <div className={styles.TeaInfo}>
        </div>
    </div>
    );
}

export default Topping;