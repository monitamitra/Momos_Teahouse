import React from "react";
import "./About_Button.css";
import {useNavigate} from 'react-router-dom';

function AboutButton() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
    const navigate = useNavigate();
    const navigateToAbout = ()  => {
    navigate('/about');
    scrollToTop();
  }

    return (
            <button id="aboutButton" type="button" onClick={navigateToAbout}>Learn More About Us</button>
    );
}

export default AboutButton;