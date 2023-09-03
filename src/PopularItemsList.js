import React from "react";
import styles from "./TeaMenu.module.css";
import PopularItem from "./PopularItem";

function PopularItemsList({PopularItems}) {
    return (
        <div className={styles.TeaList}>
            {PopularItems.map((popularItem) => {
                return <PopularItem popularItem={popularItem} key={popularItem.name}/>
            })}
        </div>
    );
}

export default PopularItemsList;