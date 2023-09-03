import React from "react";
import styles from "./MenuButton.module.css";
import {useNavigate} from 'react-router-dom';

function GiftCardButton() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }
        const navigate = useNavigate();
        const navigateToMenu = ()  => {
        navigate("/buygiftcard");
        scrollToTop();
      }

    return (
        <button onClick={navigateToMenu}className={styles.button}>Buy A Gift Card</button>
    )
}

export default GiftCardButton;