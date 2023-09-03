import React from "react";
import styles from "./RadioForm.module.css";

function IceForm() {
    return (
    <div className={styles.mainFormIce}>
        <div className={styles.choices}>
        <h4>Ice Level</h4>
        <p className={styles.extraInfo}>Required*</p>
        <p className={styles.extraInfo}>Please Select 1</p>
            <form>
                <div className={styles.container}>
                <label className={styles.label} for="ExtraIce">Extra Ice</label>
                <input className={styles.input} name="ice" id="ExtraIce" type="radio"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="LessIce">Less Ice</label>
                <input className={styles.input} name="ice" id="LessIce" type="radio"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="RegularIce">Regular Ice</label>
                <input className={styles.input} name="ice" id="RegularIce" type="radio"></input>
                </div>
                <div className={styles.container}>
                <label className={styles.label} for="NoIce">No Ice</label>
                <input className={styles.input} name="ice" id="NoIce" type="radio"></input>
                </div>
            </form>
        </div>
    </div>
    );
}

export default IceForm;