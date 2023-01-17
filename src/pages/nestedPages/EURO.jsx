import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import euro from './assets/euro.jpg'

function EURO({ addItemToCart }) {
    
    return <div className="currency">
        <img className="currencypageImg" src={euro} alt="" />
        <div className="currencyinfo">
            <h3>Euro</h3>
            <p>1.04$</p>
        </div>
        <button className="currency-btn" onClick={() => addItemToCart({ name: 'EURO', price: '1.04', amount: '1'})}>Add to cart</button>
    </div>
}

export default EURO