
export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state, item:state.item.filter((currItem) => {
                return currItem.id !== action.payload;
            })
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state, item: []
        }
    }

    if (action.type === "ADD_NEW_ITEM_TO_CART") {
                
            return {
                    ...state, item: [...state.item, action.payload]
            }
        }

    if (action.type === "ADD_ONE_TO_CART") {
        const updatedCart = state.item.map((currItem) =>{
            if (currItem.id === action.payload) {
                return {
                    ...currItem, amount: currItem.amount + 1
                }
            }
            return currItem;
        })

        return {...state, item: updatedCart}
    }

    if (action.type === "DELETE_ONE_FROM_CART") {
        const updatedCart = state.item.map((currItem) => {
            if (currItem.id === action.payload) {
                return {
                    ...currItem, amount: currItem.amount - 1
                }
            }
            return currItem;
        }).filter((currItem) => {
            return currItem.amount !== 0;
        })
       
        return {...state, item: updatedCart}
    }

    if (action.type === "GET_TOTAL_ITEMS") {
        let {totalItems, totalAmount} = state.item.reduce((accum, currVal) => {
            let {price, amount} = currVal;
            let updatedTotalAmount = price * amount;
            accum.totalAmount += updatedTotalAmount;
            accum.totalItems += amount;
            return accum; 
        }, {
            totalItems: 0,
            totalAmount: 0, 
        });

        return {...state, totalItems, totalAmount};
    }



    return state;

}