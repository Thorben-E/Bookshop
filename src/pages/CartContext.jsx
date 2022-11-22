import React, {createContext, useState} from "react";

export const CartActiveContext = createContext(null)

export const CartContext = createContext('default cartcontext')

const addToCart = (currency, amount) => {
    setCart(cart.map((item) => {
        if (item.name === currency) {
            return {...item, amount: item.amount + parseInt(amount)}
        } else {
            console.log('no item')
            return item
        }
    }))
}