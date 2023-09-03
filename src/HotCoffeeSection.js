import React from "react";
import HotCoffee from "./HotCoffee";
import styles from "./ItemsSection.module.css";

const HotCoffeeSection = ({hotCoffeeSection}) => {
    return (
        <div className={styles.Items}>
            {hotCoffeeSection.map((hotCoffee) => {
        return (
            <div className={styles.Item}>
                <HotCoffee hotCoffee={hotCoffee} 
                key={hotCoffee.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default HotCoffeeSection;