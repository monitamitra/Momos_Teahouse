import React from "react";
import {useNavigate} from 'react-router-dom';

import styles from "./MenuButton.module.css";

function MenuButton() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
    const navigate = useNavigate();
    const navigateToMenu = ()  => {
    navigate('/menu');
    scrollToTop();
  }

    return (
        <button className={styles.button} type="button" onClick={navigateToMenu}>See the Full Menu</button>
    );
};

export default MenuButton;