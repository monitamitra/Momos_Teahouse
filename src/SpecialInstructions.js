import React from "react";
import styles from "./RadioForm.module.css";

function SpecialInstructions() {
    return (
        <div className={styles.mainForm}>
            <h4>Special Instructions</h4>
            <textarea 
            placeholder="Please do not ask for substitutions of any ingredients."
            className={styles.inputArea}>
            </textarea>
        </div>
    )

}

export default SpecialInstructions;