import React from "react";
import styles from "./RadioForm.module.css";

function MilkTypesForm() {
    return (
        <div className={styles.mainFormMilk}>
            <div className={styles.choices}>
            <h4>Milk Type</h4>
            <p className={styles.extraInfo}>Select up to 1</p>
            <form>
                <div className={styles.container}>
                    <label className={styles.label} for="wholeMilk">
                        Whole Milk (Recommended)</label>
                    <input className={styles.input} type="radio" 
                    name="milk" id="wholeMilk"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="organicMilk">
                        Organic Milk</label>
                    <input className={styles.input} type="radio" 
                    name="milk" id="organicMilk"></input>
                    <p className={styles.price}>+1.00</p>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="almondMilk">
                        Almond Milk</label>
                    <input className={styles.input} type="radio"
                    name="milk" id="almondMilk"></input>
                    <p className={styles.price}>+1.00</p>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="oatMilk">
                        Oat Milk</label>
                    <input className={styles.input} type="radio"
                    name="milk" id="oatMilk"></input>
                    <p className={styles.price}>+1.00</p>
                </div>
            </form>
            </div>
        </div>
    )
}

export default MilkTypesForm;