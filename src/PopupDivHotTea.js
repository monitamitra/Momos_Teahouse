import React, {useContext} from "react";
import styles from "./OrderOnlineDivPopup.module.css";
import SweetnessForm from "./SweetnessForm";
import ToppingsForm from "./ToppingsForm";
import SpecialInstructions from "./SpecialInstructions";
import CartHeader from "./CartHeader";
import Footer from "./Footer";
import {ContextCart} from "./ShoppingCartContext";

const PopupDivHotTea = ({menuItem}) => {

    const {item, addOneToCart, deleteOneFromCart, 
        addNewItemToCart} = useContext(ContextCart);
   

    return (
    <div>
        <CartHeader />
        <div  className={styles.ItemContainerTea}>
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
                <ToppingsForm />
                <SpecialInstructions />
            </div>
        </div>
        <Footer />
        </div>
        );
}

export default PopupDivHotTea;