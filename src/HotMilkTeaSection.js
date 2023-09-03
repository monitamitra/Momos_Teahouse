import React from "react";
import HotMilkTea from "./HotMilkTea";
import styles from "./ItemsSection.module.css";

const HotMilkTeaSection = ({hotMilkTeaSection}) => {
    return (
        <div className={styles.Items}>
            {hotMilkTeaSection.map((hotMilkTea) => {
        return (
            <div className={styles.Item}>
                <HotMilkTea hotMilkTea={hotMilkTea} 
                key={hotMilkTea.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default HotMilkTeaSection;