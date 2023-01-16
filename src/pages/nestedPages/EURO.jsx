import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import euro from './assets/euro.jpg'

function EURO() {
    
    return <div className="currency">
        <img className="currencypageImg" src={euro} alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>Euro</h3>
                <p>1.04$</p>
            </div>
            <div className="buttons">
                <button onClick={null}>Add to cart</button>
            </div>
        </div>
    </div>
}

export default EURO