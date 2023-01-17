import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import jpy from './assets/jpy.png'

function JPY({ addItemToCart }) {
    
    return <div className="currency">
        <img className="currencypageImg" src={jpy} alt="" />
        <div className="currencyinfo">
            <h3>JPY</h3>
            <p>0.007$</p>
        </div>
        <button className="currency-btn" onClick={() => addItemToCart({name: 'JPY', price: '0.007', amount: '1'})}>Add to cart</button>
    </div>
}

export default JPY