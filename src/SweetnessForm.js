import React from "react";
import styles from "./RadioForm.module.css";

function SweetnessForm() {
    return (
    <div className={styles.mainFormSweetness}>
        <div className={styles.choices}>
        <h4>Sweetness</h4>
        <p className={styles.extraInfo}>Required*</p>
        <p className={styles.extraInfo}>Please Select 1</p>
            <form>
                <div className={styles.container}>
                <label className={styles.label} for="120">120%</label>
                <input className={styles.input} name="sweet" id="120" type="radio"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="100">100% (Recommended) </label>
                <input className={styles.input} name="sweet" id="100" type="radio"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label}  for="75">75%</label>
                <input className={styles.input} name="sweet" id="75" type="radio"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="50">50%</label>
                <input className={styles.input} name="sweet" id="50" type="radio"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="25">25%</label>
                <input className={styles.input} name="sweet" id="25" type="radio"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="0">0%</label>
                <input className={styles.input} name="sweet" id="0" type="radio"></input>
                </div>
            </form>
        </div>
    </div>
    )

}

export default SweetnessForm;