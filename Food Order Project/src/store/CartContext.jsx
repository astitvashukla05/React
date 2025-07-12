import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    emptyCart:()=>{}
});
function cartReducer(state, action) {
    if (action.type === 'Add_Item') {

        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.items];
        const currItem = state.items[existingItemIndex];
        if (existingItemIndex > -1) {
            const updatedItem = {
                ...currItem,
                quantity: currItem.quantity + 1
            }
            updatedItems[existingItemIndex] = updatedItem


        } else {
            updatedItems.push({ ...action.item, quantity: 1 })
        }
        return { ...state, items: updatedItems }
    }
    if (action.type === 'Remove_Item') {


        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
        const updatedItems = [...state.items];
        const currItem = state.items[existingItemIndex];
        if (currItem.quantity > 1) {
            const updatedItem = {
                ...currItem,
                quantity: currItem.quantity - 1
            }
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems.splice(existingItemIndex, 1);
        }

        return { ...state, items: updatedItems }
    }
    if(action.type==='Empty_Cart'){
        return{...state,items:[]}
    }

}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })


    function addItem(item) {
        dispatchCartAction({ type: 'Add_Item', item })
    }
    function removeItem(id) {
        dispatchCartAction({ type: "Remove_Item", id })
    }
    function emptyCart(){
        dispatchCartAction({type:"Empty_Cart"})
    }
    const valueCtx = {
        items: cart.items,
        addItem: addItem,
        removeItem: removeItem,
        emptyCart
    }
   
    console.log(valueCtx)
    return <CartContext value={valueCtx}>{children}</CartContext>

}
export default CartContext;