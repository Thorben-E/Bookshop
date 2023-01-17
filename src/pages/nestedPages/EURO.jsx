import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import img from './assets/atomichabits.jpeg'

function EURO({ addItemToCart }) {
    
    return <div className="currency">
        <img className="currencypageImg" src={img} alt="" />
        <div className="currencyinfo">
            <h3>Atomic habits</h3>
            <p>14.99$</p>
        </div>
        <button className="currency-btn" onClick={() => addItemToCart({ name: 'Atomic habits', price: '14.99', amount: '1', img: img})}>Add to cart</button>
    </div>
}

export default EURO