import React from "react";
import styles from "./TeaMenu.module.css";
import FruitTea from "./FruitTea";

const FruitTeaList = ({FruitTeas}) => {
    return (
        <div className={styles.TeaList}>
            {FruitTeas.map((fruitTea) => {
                return <FruitTea fruitTea={fruitTea} key={fruitTea.name}/>
            })}
        </div>
    );
}

export default FruitTeaList;