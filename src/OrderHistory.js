import React, {useEffect, useState} from "react";
import {db} from "./Firebase";
import {collection, getDocs, addDoc, doc} from "firebase/firestore";
import { useUserAuth } from "./UserAuthContext";


function OrderHistory() {
    const {item} = useUserAuth();
    const [customers, setCustomers] = useState([]);
    const customerCollectionRef = collection(db, "Customers");
    const {user, giftCardPurchase} = useUserAuth();

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
    

}

export default OrderHistory;