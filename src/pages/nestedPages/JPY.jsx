import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import jpy from './assets/jpy.png'

function JPY({addThis}) {
    
    return <div className="currency">
        <img className="currencypageImg" src={jpy} alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>JPY</h3>
                <p>0.007$</p>
            </div>
            <div className="buttons">
                <button onClick={null}>Add to cart</button>
            </div>
        </div>
    </div>
}

export default JPY