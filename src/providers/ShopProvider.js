import React, { useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../list'

    export const ShopContext = createContext(null)

  const getDefaultCart = () =>{
        let cart = {}

        for (let i = 0; i < PRODUCTS.length + 1; i++ ){
            cart[i] = 0
        }
        return cart
    }

const ShopProvider = ({children}) => {


    const [cartItems, setCartItems] = useState(getDefaultCart())

    const checkOut = ()=>{
      setCartItems(getDefaultCart())
    }

    const getTotalAmnt = (itemId)=>{
        let totalAmnt = 0
        for(const item in cartItems){
          if (cartItems[item] > 0){
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
            totalAmnt += cartItems[item] * itemInfo.price
          }
        }
        return totalAmnt
    }

    const addToCart = (itemId)=>{
      setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] + 1}))
    }
    
    const removeFromCart = (itemId)=>{
      setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart,removeFromCart,getTotalAmnt, checkOut}
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>

  )
}

export default ShopProvider
