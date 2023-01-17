import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import gbp from './assets/gbp.png'

function GBP({ addItemToCart }) {
    
    return <div className="currency">
        <img className="currencypageImg" src={gbp} alt="" />
        <div className="currencyinfo">
            <h3>GBP</h3>
            <p>1.19$</p>
        </div>
        <button className="currency-btn" onClick={() => addItemToCart({name: 'GBP', price: '1.19', amount: '1'})}>Add to cart</button>
    </div>
}

export default GBP