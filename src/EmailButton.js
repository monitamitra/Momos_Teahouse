import React from "react";
import styles from "./GiftCardForm.module.css";
import $ from "jquery";

function EmailButton() {
    const showEmail = () => {
        $("#phone").css("display", "none");
        $("#email").css("display", "block");
        $("#emailButton").addClass("active");
    }

    const menuItems =  (
        <button id="emailButton" className={styles.button} type="button" 
        autofocus="true">Email</button>
    )

    document.getElementById("emailButton").addEventListener("focus", showEmail());
}

export default EmailButton;