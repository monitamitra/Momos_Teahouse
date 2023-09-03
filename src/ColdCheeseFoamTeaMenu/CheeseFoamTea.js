import React from "react";
import styles from "../TeaSquare.module.css";

const CheeseFoamTea = ({cheeseFoamTea}) => {
    return (
        <div>
            <div className={styles.Tea}>
            <div className={styles.imageContainer}>
                <img src={cheeseFoamTea.imageSrc} alt="cheese foam tea"></img>
            </div>
            <h2>{cheeseFoamTea.name}</h2>
        </div>
    </div>
    );
}

export default CheeseFoamTea;