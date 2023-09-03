import React, { useEffect, createContext, useReducer } from "react";
import CartContext from "./CartContext";
import {products} from "./CartProductsData";
import {reducer} from "./Reducers";


export const ContextCart = createContext();

    const getUpdatedCart = () => {
        let newCartData = localStorage.getItem("cartItems");
        if (newCartData === []) {
            return [];
        }
        return JSON.parse(newCartData);
    }

const initialState = {
    item: getUpdatedCart(), 
    totalAmount: 0, 
    totalItems: 0
}

const ShoppingCartContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM", 
            payload: id
        })
    }

    const clearCart = () => {
        return dispatch({
            type: "CLEAR_CART"
        })
    }

    const addOneToCart = (id) => {
        return dispatch({
            type: "ADD_ONE_TO_CART", 
            payload: id
        })
    }

    const deleteOneFromCart = (id) => {
        return dispatch ({
            type: "DELETE_ONE_FROM_CART", 
            payload: id
        })
    }

    const addNewItemToCart = (product) => {
        return dispatch ({
            type: "ADD_NEW_ITEM_TO_CART", 
            payload: product
        })
    }

    useEffect(() => {
        dispatch({
            type: "GET_TOTAL_ITEMS"
        })
    }, [state.item])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.item));
    }, [state.item])

    return (
        <ContextCart.Provider value={{...state, removeItem, clearCart, addOneToCart, 
        deleteOneFromCart, addNewItemToCart}}>
           {children}
        </ContextCart.Provider>
    )
}

export default ShoppingCartContext;