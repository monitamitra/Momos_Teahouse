import React from "react";
import styles from "./ItemsSection.module.css";
import CheeseFoam from "./CheeseFoamOnline";

const CheeseFoamSection = ({cheeseFoamSection}) => {
    return (
        <div className={styles.Items}>
            {cheeseFoamSection.map((cheeseFoam) => {
        return (
            <div className={styles.Item}>
                <CheeseFoam cheeseFoam={cheeseFoam} 
                key={cheeseFoam.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default CheeseFoamSection;