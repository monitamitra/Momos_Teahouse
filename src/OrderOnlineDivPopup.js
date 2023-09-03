import React from "react";
import styles from "./OrderOnlineDivPopup.module.css";
import SweetnessForm from "./SweetnessForm";
import IceLevel from "./IceLevel";
import ToppingsForm from "./ToppingsForm";
import SpecialInstructions from "./SpecialInstructions";
import CartHeader from "./CartHeader";
import Footer from "./Footer";
import { useContext } from "react";
import { ContextCart } from "./ShoppingCartContext";
import ReactGA from "react-ga";


const PopupDiv = ({menuItem}) => {

    const {item, addOneToCart, deleteOneFromCart, 
        addNewItemToCart} = useContext(ContextCart);
    
        const TRACKING_ID = "G-JG1C6CQ7L6";
        ReactGA.initialize(TRACKING_ID);
   
    return (
    <div>
        <CartHeader />
        <div className={styles.ItemContainer}>
        <div className={styles.Item}>
            <div className={styles.imageContainer}>
                    <img src={menuItem.imageSrc} alt="menu item"></img>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.itemName}>{menuItem.name}</h2>
                    <p className={styles.itemDescription}>{menuItem.description}</p>
                </div>
                <div className={styles.addItems}>
                {item.some((currItem) => 
                    currItem.id === menuItem.id
               ) ?
                <div>
                    <button className={styles.button} onClick={() => {
                        deleteOneFromCart(menuItem.id);
                    }}>-</button>
                    <button className={styles.button} onClick={() => {
                         ReactGA.event({
                            category: 'Button',
                            action: 'Click',
                            label: `${menuItem.name}`
                          });
                        addOneToCart(menuItem.id);
                    }}>+</button>
                </div> 
                        :
                    <button className={styles.cartButton} onClick={() => {
                        addNewItemToCart(menuItem);
                    }}>Add to Cart</button>
                }
                </div>
            </div>
        <div className={styles.formContainer}>
                <SweetnessForm />
                <IceLevel />
                <ToppingsForm />
                <SpecialInstructions />
        </div>
    </div>
    <Footer />
    </div>
);
}

export default PopupDiv;