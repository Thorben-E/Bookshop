import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import gbp from './assets/gbp.png'

function GBP() {
    
    return <div className="currency">
        <img className="currencypageImg" src={gbp} alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>GBP</h3>
                <p>1.19$</p>
            </div>
            <div className="buttons">
               <button onClick={null}>Add to cart</button>
            </div>
        </div>
    </div>
}

export default GBP