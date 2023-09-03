import React, {useState, useEffect, useContext} from "react";
import {Route, Routes} from "react-router-dom";
import styles from "./Location.module.css";
import {useNavigate} from 'react-router-dom';
import OrderOnline from "./OrderOnline";

const Location = ({location}) => {

   const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
    const navigate = useNavigate();
    
    const navigateToOrder = (location)  => {
        navigate(`/orderonline`);
        scrollToTop();
  }

    return (
    <div className={styles.location}>
        <div className={styles.imageContainer}>
            <img src={location.imageSrc} alt="boba shop location"></img>
        </div>
        <div className={styles.locationAddress}>
            <h1>{location.city}</h1>
            <p>{location.street}</p>
            <p>{location.zipcode}</p>
            <div className={styles.orderOnlineButton}>
            <button id={location.city} className={styles.button} type="button" 
            onClick={(e) => {
                navigateToOrder(location.name);
                console.log(e.target.id);
                localStorage.setItem("location", e.target.id);
            }}>Order Online</button>
            </div>
        </div>
    </div>
    );
}



export default Location;