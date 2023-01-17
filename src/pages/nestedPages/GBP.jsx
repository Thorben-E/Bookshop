import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import img from './assets/meditations.jpg'

function GBP({ addItemToCart }) {
    
    return <div className="currency">
        <img className="currencypageImg" src={img} alt="" />
        <div className="currencyinfo">
            <h3>Meditations</h3>
            <p>9.99$</p>
        </div>
        <button className="currency-btn" onClick={() => addItemToCart({name: 'Meditations', price: '9.99', amount: '1', img: img})}>Add to cart</button>
    </div>
}

export default GBP