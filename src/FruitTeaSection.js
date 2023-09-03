import React from "react";
import styles from "./ItemsSection.module.css";
import FruitTea from "./FruitTeaOnline";

const FruitTeaSection = ({fruitTeaSection}) => {
    return (
        <div className={styles.Items}>
            {fruitTeaSection.map((fruitTea) => {
        return (
            <div className={styles.Item}>
                <FruitTea fruitTea={fruitTea} 
                key={fruitTea.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default FruitTeaSection;