import React from "react";
import styles from "./ItemsSection.module.css";
import NewItem from "./NewItem";

const NewItemsSection = ({newItems}) => {
    return (
        <div className={styles.Items}>
            {newItems.map((newItem) => {
        return (
            <div className={styles.Item}>
                <NewItem newItem={newItem} key={newItem.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default NewItemsSection;