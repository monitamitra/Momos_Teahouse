import React from "react";
import styles from "./GiftCardForm.module.css";
import $ from "jquery";
import { useUserAuth } from "./UserAuthContext";

import GooglePay from "./GiftCardGooglePay";

function GiftCardForm() {
    const {setGiftCardPurchase} = useUserAuth();

    const showEmail = () => {
        $("#phone").css("display", "none");
        $("#email").css("display", "block");
    }

    const showPhone = () => {
        $("#email").css("display", "none");
        $("#phone").css("display", "block");
    }

    return (
     <div className={styles.GiftCardForm}>
       <form>
        <h1>Give A Gift</h1>
        <div className={styles.chooseAmount}>
            <h3 className={styles.sectionLabel}>Choose Amount</h3>
        <div className={styles.amount}>
        <label for="amount" className={styles.sideLabel}>Amount*  </label>
        <input onChange={(e) => {
            const text = e.target.value;
            setGiftCardPurchase(Number(text));
        }} id="amount" type="number" className={styles.formInput} min="5" max="100" />
        </div>
        </div>
        <div className={styles.Personalize}>
        <h3 className={styles.sectionLabel}>Personalize</h3>
            <div className={styles.giftcardTo}>
                <label for="recipient" className={styles.sideLabel}>To   </label>
                <input id="recipient" className={styles.formInput} type="text"></input>
            </div>
            <div className={styles.giftcardSender}>
                <label for="sender" className={styles.sideLabel}>From    </label>
                <input id="sender"className={styles.formInput} type="text"></input>
            </div>
            <div className={styles.giftcardmessage}>
                <label for="message" className={styles.sideLabel}>Message    </label>
                <textarea id="message" className={styles.formInput} type="text"></textarea>
            </div>
        </div>
        <div className={styles.Delivery}>
            <h3 className={styles.sectionLabel}>Delivery</h3>
            <div className={styles.sendLabel}>
            <label className={styles.sideLabel}>Send To*    </label>
            </div>
                <div className={styles.controlInput}>
                    <button className={styles.button} type="button" 
                    autofocus="true" onFocus={showEmail}>Email</button>
                    <button className={styles.button} type="button" onFocus={showPhone}>Phone</button>
                </div>
                <div className={styles.recipientInfoInput}>
                        <input id="email" type="text" placeholder="Recipient Email"></input>
                        <input id="phone" type="text" placeholder="Recipient Phone"></input>
                </div>
        </div> 
    <div className={styles.googlePay}>
        <GooglePay />
    </div>
         </form> 
    </div> 
    );
}

export default GiftCardForm;