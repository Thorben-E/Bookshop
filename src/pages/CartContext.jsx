import React, {createContext, useState} from "react";

export const CartContext = createContext(null)

/* setcartDetailValue(cartDetailValue.map(item => {
    if (item.name === currency) {
        console.log('here')
        return {...item, amount: item.amount + parseInt(amount)}
    } else {
        return item
    }
})) */