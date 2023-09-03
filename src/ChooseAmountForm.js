import React from "react";
import styles from "./GiftCardForm.module.css";

function ChooseAmountForm() {
    return (
        <div className={styles.chooseAmount}>
        <h3 className={styles.sectionLabel}>Choose Amount</h3>
        <label for="amount" className={styles.sectionLabel}>Amount*  </label>
        <input id="amount" type="number" className={styles.formInput} min="5" max="100" />
        </div>
    )

}

export default ChooseAmountForm;