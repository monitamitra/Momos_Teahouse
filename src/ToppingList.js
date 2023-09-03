import React from "react";
import styles from "./TeaMenu.module.css";
import Topping from "./Topping";

const ToppingList = ({Toppings}) => {
    return (
        <div className={styles.TeaList}>
            {Toppings.map((topping) => {
                return <Topping topping={topping} key={topping.name}/>
            })}
        </div>
    );
}

export default ToppingList;