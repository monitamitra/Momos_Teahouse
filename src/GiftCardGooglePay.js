import React, {useState, useEffect} from "react";
import { useUserAuth } from "./UserAuthContext";
import GooglePayButton from "@google-pay/button-react";
import {db} from "./Firebase";
import {collection, getDocs, addDoc, doc, updateDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

function GooglePay() {
    const navigate = useNavigate();
    const {user, giftCardPurchase} = useUserAuth();
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
    }, [])

    let currUser = "";

    for (let i = 0; i < customers.length; i++) {
        if (customers[i].Email === user.email) {
            currUser = customers[i];
        }
    }

    const updateGiftCardAmount = async (id, currGiftBalance) => {
        const userDoc = doc(db, "Customers", id);
        const newFields = {GiftCardBalance: Number(currGiftBalance) + Number(giftCardPurchase)};
        await updateDoc(userDoc, newFields);
    }



    return (
          <GooglePayButton onClick={() => {
            updateGiftCardAmount(currUser.id, currUser.GiftCardBalance);
            
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
                totalPrice: giftCardPurchase + "", 
                currencyCode: "USD",
                countryCode: "US"
            }, 
            shippingAddressRequired: true, 
            callbackIntents: ["PAYMENT_AUTHORIZATION"]
          }}
          onLoadPaymentData={(paymentRequest) => {
            navigate("/cartCheckout");
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