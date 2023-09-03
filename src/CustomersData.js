

import React, {useState, useEffect} from "react";
import {db} from "./Firebase";
import {collection, getDocs, addDoc, doc, updateDoc} from "firebase/firestore";
import { useUserAuth } from "./UserAuthContext";

export const MyAccount = () => {
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
   
}
