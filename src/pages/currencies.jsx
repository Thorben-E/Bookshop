import { Form, Link } from "react-router-dom"
import EURO from "./nestedPages/EURO"
import JPY from "./nestedPages/JPY"
import GBP from "./nestedPages/GBP"
import { useState } from "react"

//import coin fotos
//map over array en creer div: naam, foto, prijs, button naar currency

function Currencies() {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        setCart(current => [...current, item])
    }
    return <div className="currencies">
        <div className="currencyItems">
            <EURO addThis={addToCart} />
            <JPY addThis={addToCart} />
            <GBP addThis={addToCart}/>
        </div>
    </div>
}

export default Currencies