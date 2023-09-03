import React from "react";
import styles from "./ItemsSection.module.css";
import OriginalTea from "./OriginalTea";

const OriginalTeaSection = ({originalTeaSection}) => {
    return (
        <div className={styles.Items}>
            {originalTeaSection.map((originalTea) => {
        return (
            <div className={styles.Item}>
                <OriginalTea originalTea={originalTea} 
                key={originalTea.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default OriginalTeaSection;