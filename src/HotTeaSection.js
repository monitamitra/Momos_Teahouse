import React from "react";
import HotTea from "./HotTea";
import styles from "./ItemsSection.module.css";

const HotTeaSection = ({hotTeaSection}) => {
    return (
        <div className={styles.Items}>
            {hotTeaSection.map((hotTea) => {
        return (
            <div className={styles.Item}>
                <HotTea hotTea={hotTea} 
                key={hotTea.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default HotTeaSection;