import React from "react";
import styles from "./ItemsSection.module.css";
import MilkTea from "./MilkTeaOnline";

const MilkTeaSection = ({milkTeaList}) => {
    return (
        <div className={styles.Items}>
            {milkTeaList.map((milkTea) => {
        return (
            <div className={styles.Item}>
                <MilkTea milkTea={milkTea} 
                key={milkTea.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default MilkTeaSection;