import React, {useContext} from "react";
import { useNavigate} from "react-router-dom";
import styles from "./Cart.module.css";
import CartHeader from "./CartHeader";
import Footer from "./Footer";
import { CartItem } from "./CartItem";
import { ContextCart } from "./ShoppingCartContext";
import GooglePay from "./CartGooglePay";
import { useUserAuth } from "./UserAuthContext";

const CartContext = () => {
  const {setRewardPurchase} = useUserAuth();
  const {item, totalAmount, totalItems, clearCart} = useContext(ContextCart);
  setRewardPurchase(Number((totalAmount / 5.0).toFixed(2)));
  const navigate = useNavigate();

  if (item.length === 0) {
    return (
      <>
      <CartHeader />
      <div className={styles.cartEmpty}>
        <h1>Cart is Empty</h1>
        <p>Don't find any of our regular drinks refreshing? Look at our new menu items!</p>
      </div>
      <Footer />
      </>
    )
  }

  console.log(item);

  return (
    <>
        <div>
        <CartHeader></CartHeader>
        <div tabIndex="1" onClick={() => {
          navigate(-2);
        }} className={styles.continueShopping}>
            <img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="arrow"></img>
            <h3>Continue Shopping</h3>
        </div>
        <div className={styles.cartTitle}>
            <h1>Shopping Cart</h1>
            <p>You have <span>{totalItems}</span> items in the cart</p>
        </div>
        <div className={styles.cartItems}>
            <div className={styles.ProductContainer}>
                {item.map((product) => {
                  return <CartItem key={product.id} {...product} />
                })}
            </div>
        </div>
        <div className={styles.total}>
            <h3>Order Subtotal: ${totalAmount.toFixed(2)}</h3>
            <GooglePay />
            <button onClick={() => {
              clearCart();
            }}>Clear Cart</button>
        </div>
            <Footer></Footer>
        </div>
    </>
  )
}

export default CartContext;
