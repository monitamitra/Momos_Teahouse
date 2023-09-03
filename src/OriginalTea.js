import React from "react";
import styles from "./Item.module.css";
import { useNavigate} from "react-router-dom";

const OriginalTea = ({originalTea}) => {
    const link = `${originalTea.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();
    return (
    <div id={link} tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }} className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.imageContainer}>
                <img src={originalTea.imageSrc} alt="new item"></img>
            </div>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{originalTea.name}</h2>
                <p className={styles.itemPrice}>${originalTea.price}</p>
                <p className={styles.itemDescription}>{originalTea.description}</p>
            </div>
        </div>
    </div>
    );
}

export default OriginalTea;