import React from "react";
import styles from "../TeaMenu.module.css";
import CheeseFoamTea from "./CheeseFoamTea";

const CheeseFoamList = ({CheeseFoamTeas}) => {
    return (
        <div className={styles.TeaList}>
            {CheeseFoamTeas.map((cheeseFoamTea) => {
                return <CheeseFoamTea cheeseFoamTea={cheeseFoamTea} key={cheeseFoamTea.name}/>
            })}
        </div>
    );
}

export default CheeseFoamList;