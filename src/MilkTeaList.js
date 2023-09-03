import React from "react";
import styles from "./TeaMenu.module.css";
import MilkTea from "./MilkTea";

const MilkTeaList = ({MilkTeas}) => {
    return (
        <div className={styles.TeaList}>
            {MilkTeas.map((milkTea) => {
                return <MilkTea milkTea={milkTea} key={milkTea.name}/>
            })}
        </div>
    );
}

export default MilkTeaList;