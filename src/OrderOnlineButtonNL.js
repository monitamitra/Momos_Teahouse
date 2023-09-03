import React from "react";
import {useNavigate} from 'react-router-dom';
import styles from "./MenuButton.module.css";

function OrderOnlineButton() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
    const navigate = useNavigate();
    const navigateToOrder = ()  => {
    navigate("/locations");
    scrollToTop();
  }

    return (
        <button className={styles.button} type="button" onClick={navigateToOrder}>Order Online</button>
    );
};

export default OrderOnlineButton;