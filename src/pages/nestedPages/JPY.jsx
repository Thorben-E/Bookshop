import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import img from './assets/awakenthegiant.jpg'

function JPY({ addItemToCart }) {
    
    return <div className="currency">
        <img className="currencypageImg" src={img} alt="" />
        <div className="currencyinfo">
            <h3>Awaken the<br></br>giant within</h3>
            <p>12.99$</p>
        </div>
        <button className="currency-btn" onClick={() => addItemToCart({name: 'Awaken the giant within', price: '12.99', amount: '1', img: img})}>Add to cart</button>
    </div>
}

export default JPY