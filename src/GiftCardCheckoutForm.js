import React, {useState} from "react";
import styles from "./GiftCardCheckoutForm.module.css";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";

import axios from "axios";

const CARD_OPTIONS = {
    iconStyle: "solid", 
    style: {
        base: {
            iconColor: "#c4f0ff", 
            color: "#fff", 
            fontWeight: 500, 
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif", 
            fontSize: "16px", 
            fontSmoothing: "antialiased", 
            ":webkit-autofill": {color: "fce883"}, 
            "::placeholder": {color: "#87bbfd"}
        }, 
        invalid: {
            iconColor: "#ffc7ee", 
            color: "#ffc7ee"
        }
    }
}

function GiftCardCheckOutForm() {

  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card", 
        card: elements.getElement(CardElement)
    });

    if (!error) {
        try {
            const {id} = paymentMethod;
            const {response} = await axios.post("http://localhost:3000/giftcardcheckout"
            , {
                amount: 1000, 
                id
            })

            if (response.data.success) {
                console.log("Successful payment");
                setSuccess(true);
            }
        } catch (error) {
            console.log("Error", error);

        }
    } else {
        console.log(error.message);
    }

  }

    return (
    <div className={styles.GiftCardForm}>
    {!success ? 
    <form onSubmit={handleSubmit}>
        <fieldset className={styles.FormGroup}>
            <div className={styles.FormRow}>
                <CardElement options={CARD_OPTIONS}></CardElement>
            </div>
        </fieldset>
        <button>Place Order</button>
    </form>
    : (
        <div>
            <h2>Your order is on its way!</h2>
        </div>
    )
    }
    </div>
    )
}

export default GiftCardCheckOutForm;