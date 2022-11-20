import { Form, Link } from "react-router-dom"
import EURO from "./nestedPages/EURO"
import JPY from "./nestedPages/JPY"
import GBP from "./nestedPages/GBP"
import { useState } from "react"

//import coin fotos
//map over array en creer div: naam, foto, prijs, button naar currency

function Currencies({ addToCart, changeCart, cartActive }) {
    
    return <>
        <div className="currencies">
        <div className="currencyItems">
            <EURO addToCart={addToCart} />
            <JPY addToCart={addToCart} />
            <GBP addToCart={addToCart}/>
        </div>
        </div>
        {cartActive && <div className="cart">
            <h2>Your cart</h2>
            <p>Total: </p>
            <button className="checkoutButton" onClick={addToCart}>Checkout</button>
            <button className="closeButton" onClick={changeCart}>Close</button>
        </div>}
        
    </>
}

export default Currencies