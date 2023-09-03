import React from "react";
import styles from "./Item.module.css";
import { useNavigate} from "react-router-dom";

const OriginalCoffee = ({originalCoffee}) => {
    const link = `${originalCoffee.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();
    
    return (
    <div id={link} tabIndex="1" onClick={() => {
        navigate(`/products/${link}`);
    }}className={styles.ItemContainer}>
            <div className={styles.Item}>
                <div className={styles.imageContainer}>
                    <img src={originalCoffee.imageSrc} alt="new item"></img>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.itemName}>{originalCoffee.name}</h2>
                    <p className={styles.itemPrice}>${originalCoffee.price}</p>
                    <p className={styles.itemDescription}>{originalCoffee.description}</p>
                </div>
            </div>
     </div>
    );
}

export default OriginalCoffee;