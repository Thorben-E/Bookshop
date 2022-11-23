import EURO from "./nestedPages/EURO"
import JPY from "./nestedPages/JPY"
import GBP from "./nestedPages/GBP"
import { useContext } from "react"
import CartItem from "./cartItem"
import { CartContext } from "./CartContext"

//import coin fotos
//map over array en creer div: naam, foto, prijs, button naar currency

function Currencies() {
    const { cartActive, cartDetails } = useContext(CartContext)
    const [cartActiveValue, setcartActiveValue] = cartActive;
    const [cartDetailValue, setcartDetailValue] = cartDetails
    return <>
        <div className="currencies">
        <div className="currencyItems">
            <EURO />
            <JPY />
            <GBP />
        </div>
        </div>
        {cartActiveValue && <div className="cart">
            <h2>Your cart</h2>
            <ul>
                {cartDetailValue.map((item,i) => (
                    <li key={i}>
                        <div className="cartitems">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <div className="amount">
                                <button>-</button>
                                <p>{item.amount}</p>
                                <button>+</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Total: </p>
            <button className="checkoutButton" >Checkout</button>
            <button className="closeButton" onClick={() => setcartActiveValue(false)}>Close</button>
        </div>}
        
    </>
}

export default Currencies