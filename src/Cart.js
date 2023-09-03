import React, { useEffect, createContext, useReducer, useContext} from "react";
import ContextCart from "./ShoppingCartContext";
import CartHeader from "./CartHeader";
import Footer from "./Footer";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";


const Cart = () => {
    const {item, removeItem, addOneToCart, deleteOneFromCart} = useContext(ContextCart);
    return (
    <div>
        <CartHeader />
        <div className={styles.ProductContainer}>
                {item.map((currItem) => {
                    return (
                        <CartItem key={currItem.id} product={currItem}/>
                    )
                })}

        </div>
        <Footer />
    </div>
    )
}

export default Cart;

