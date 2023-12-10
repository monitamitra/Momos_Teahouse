import React, {useState, useEffect, useContext} from "react";
import { ContextCart } from "./ShoppingCartContext";
import { useUserAuth } from "./UserAuthContext";
import GooglePayButton from "@google-pay/button-react";
import {useNavigate} from "react-router-dom";
import {db} from "./Firebase";
import {collection, getDocs, doc, updateDoc} from "firebase/firestore";

function GooglePay() {
    const navigate = useNavigate();
    const {totalAmount, clearCart} = useContext(ContextCart);
    const {user, rewardPurchase} = useUserAuth();
    const [customers, setCustomers] = useState([]);
    const customerCollectionRef = collection(db, "Customers");

    useEffect(() => {
        const getCustomers = async () => {
            const data = await getDocs(customerCollectionRef);
            setCustomers(data.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )))
        }

        getCustomers();
    }, [customerCollectionRef])

    let currUser = "";

    if (user == null) {
        user.email = "";
        user.password = ""; 
    }

    for (let i = 0; i < customers.length; i++) {
        if (customers[i].Email === user.email) {
            currUser = customers[i];
        }
    }



    const updateRewardBalance = async (id, currRewardBalance) => {
        const userDoc = doc(db, "Customers", id);
        const newFields = {RewardsBalance: currRewardBalance + rewardPurchase};
        await updateDoc(userDoc, newFields);
    }
    

    return (
          <GooglePayButton onClick={() => {
            updateRewardBalance(currUser.id, currUser.RewardsBalance);
          }

          }
          environment="TEST"
          buttonSizeMode="fill"
          paymentRequest={{
            apiVersion: 2, 
            apiVersionMinor:0, 
            allowedPaymentMethods: [
                {
                    type: "CARD", 
                    parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"], 
                        allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX", "DISCOVER"]
                    }, 
                    tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY", 
                        parameters: {
                            gateway: "example", 
                            gatewayMerchantId: "exampleGatewayMerchantId"
                        }
                    }, 
                    
                }
            ], 
            merchantInfo: {
                merchantId: "17613812255336763067", 
                merchantName: "Momo's Teahouse"
            }, 
            transactionInfo: {
                totalPriceStatus: "FINAL", 
                totalPriceLabel: "Total", 
                totalPrice: totalAmount.toFixed(2), 
                currencyCode: "USD",
                countryCode: "US"
            }, 
            shippingAddressRequired: true, 
            callbackIntents: ["PAYMENT_AUTHORIZATION"]
          }}
          onLoadPaymentData={(paymentRequest) => {
            navigate("/cartCheckout");
            clearCart();
          }}
          onPaymentAuthorized={paymentData => {
            console.log("Payment Authourization success", paymentData);
            return {transactionState: "SUCCESS"}
          }}
          existingPaymentMethodRequired="false"
          buttonColor="black"
          buttonType="Buy"
          />  
    )
}

export default GooglePay;