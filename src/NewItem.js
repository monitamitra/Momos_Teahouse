import React from "react";
import { useNavigate} from "react-router-dom";
import styles from "./Item.module.css";
import useAnalyticsEventTracker from './EventTracker';

const NewItem = ({newItem}) => {
    const link = `${newItem.name}`.replace(/\s+/g, '-');
    const navigate = useNavigate();
    const gaEventTracker = useAnalyticsEventTracker(`${newItem.name}`);

    const NewItem =  (
    <div  id={link} tabIndex="1" onClick={() => {
        gaEventTracker('milk tea')
        navigate(`/products/${link}`)
    }}className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.imageContainer}>
                <img src={newItem.imageSrc} alt="new item"></img>
            </div>
            <div className={styles.info}>
                <h2 className={styles.itemName}>{newItem.name}</h2>
                <p className={styles.itemPrice}>${newItem.price}</p>
                <p className={styles.itemDescription}>{newItem.description}</p>
            </div>
        </div>
    </div>
    );

    return NewItem;
}

export default NewItem;