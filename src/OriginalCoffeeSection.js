import React from "react";
import styles from "./ItemsSection.module.css";
import OriginalCoffee from "./OriginalCoffee";

const OriginalCoffeeSection = ({originalCoffeeSection}) => {
    return (
        <div className={styles.Items}>
            {originalCoffeeSection.map((originalCoffee) => {
        return (
            <div className={styles.Item}>
                <OriginalCoffee originalCoffee={originalCoffee} 
                key={originalCoffee.id}/>
            </div>
                )
            })}
        </div>
    );
}

export default OriginalCoffeeSection;