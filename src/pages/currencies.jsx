import EURO from "./nestedPages/EURO"
import JPY from "./nestedPages/JPY"
import GBP from "./nestedPages/GBP"
import { useContext } from "react"
import CartItem from "./cartItem"
import { CartContext } from "./CartContext"

function Currencies() {

    return <>
        <div className="currencies">
            <EURO />
            <JPY />
            <GBP />
        </div>
    </>
}

export default Currencies