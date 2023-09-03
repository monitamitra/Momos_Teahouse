import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import { ContextCart } from "./ShoppingCartContext";

export const CartItem = ({id, name, price, imageSrc, amount}) => {
const {removeItem, addOneToCart, deleteOneFromCart} = useContext(ContextCart);
const navigate = useNavigate();
    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <img alt="item" src={imageSrc}></img>
            </div>
                <div className={styles.name}>
                    <h2>{name}</h2>
                </div>
                <div className={styles.changeAmount}>
                     <div>
                        <button className={styles.button} onClick={() => {
                            deleteOneFromCart(id);
                        }}>-</button>
                    </div> 
                    <div className={styles.filterAmt}>
                    <label for="QTY">QTY</label>
                    <input id="QTY" type="text" placeholder={amount}></input>
                    </div>
                    <div >
                        <button className={styles.button} onClick={() => {
                            addOneToCart(id);
                        }}>+</button>
                    </div>
                </div>
                <div className={styles.customize}>
                    <button onClick={() => {
                        navigate(`/products/${name.replace(/\s+/g, '-')}`);
                    }}>Customize</button>
                </div>
                <div className={styles.remove}>
                    <button onClick={() => {
                        removeItem(id);
                        }}>Remove</button>
                </div>
                    <div className={styles.price}>
                        <h4>${price}</h4>
                    </div>
            </div>
    )
}

