    import React, { useState } from 'react'
    import CartContext from './CartContext'

    const CartProvider = ({children}) => {
        const [cartItems , setCartItems]= useState([]);


    //add to cart
    const addToCart=(item) =>{
        const isExist = cartItems.find(cart => cart.id === item.id)
            if(isExist){
                setCartItems(
                    cartItems.map((cartItems) => cartItems.id === item.id ? item : cartItems)
                    )
            }else{
                    setCartItems(prev =>[...prev,item])
 
            }


    }
    //remove From cart
    const removeFromCart=(id) =>{
        const cart=cartItems.filter(c => c.id !== id);
        setCartItems(cart)
    }

    return (
        <CartContext.Provider value={
        {
            cartItems,
            addToCart,
            removeFromCart,
            cartItemsLength:cartItems.length
        }}>
            {children}
        </CartContext.Provider>

    )
    }

    export default CartProvider