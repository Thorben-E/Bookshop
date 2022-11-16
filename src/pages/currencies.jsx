import { Form, Link } from "react-router-dom"
import EURO from "./nestedPages/EURO"
import JPY from "./nestedPages/JPY"
import GBP from "./nestedPages/GBP"
import { useState } from "react"

//import coin fotos
//map over array en creer div: naam, foto, prijs, button naar currency

function Currencies() {
    const [cart, setCart] = useState([
        {
            name: 'EURO',
            price: 1.04,
            amount: 0,
        },
        {
            name: 'JPY',
            price: 0.007,
            amount: 0,
        },
        {
            name: 'GBP',
            price: 1.19,
            amount: 0,
        }
    ])
    const [cartActive, setCartActive] = useState(true)
    const addToCart = (currency, amount) => {
        setCart(cart.map((item) => {
            if (item.name === currency) {
                console.log([...item])
                return {...item, amount: item.amount + parseInt(amount)}
            } else {
                return item
            }
        }))
        console.log(cart)
    }
    const closeCart = () => {
        setCartActive(false)
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