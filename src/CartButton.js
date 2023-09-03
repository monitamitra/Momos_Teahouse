import React, {useContext} from "react";
import styles from "./CartButton.module.css";
import { ContextCart } from "./ShoppingCartContext";
import { useNavigate} from "react-router-dom";

function CartButton() {

  const {totalItems} = useContext(ContextCart);

    const navigate = useNavigate();

    return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button onClick={() => {
                navigate("/cart");
            }}className={styles.button}>
                <i className="fa fa-shopping-bag"></i> 
                <div className={styles.numItems}>
                    {totalItems}
                </div>
            </button>
    </>
    );
}

export default CartButton;