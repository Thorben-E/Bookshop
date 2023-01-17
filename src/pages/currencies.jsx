import EURO from "./nestedPages/EURO"
import JPY from "./nestedPages/JPY"
import GBP from "./nestedPages/GBP"
import { useContext } from "react"
import CartItem from "./cartItem"
import { CartContext } from "./CartContext"

function Currencies({ cart, addItemToCart,removeItemFromCart }) {

    return <>
        <div className="currencies">
            <EURO addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
            <JPY addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
            <GBP addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
        </div>
    </>
}

export default Currencies