import { useState, useContext } from "react"
import { CartContext } from "../CartContext"

function JPY({addThis}) {
    const [jpgAmount, setjpgAmount] = useState(0)
    const handleChange = e => {
        setjpgAmount(e.target.value)
    }
    const { cartDetails } = useContext(CartContext)
    const [cartDetailValue, setcartDetailValue] = cartDetails
    const addToCart = (currency, amount) => {
        setcartDetailValue(cartDetailValue.map(item => {
            if (item.name === currency) {
                return {...item, amount: item.amount + parseInt(amount)}
            } else {
                return item
            }
        }))
    }
    return <div className="currency">
        <img className="currencypageImg" src="/src/assets/jpy.png" alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>JPY</h3>
                <p>0.007$</p>
            </div>
            <div className="buttons">
                <input type="number" onChange={handleChange} name="euro" id="euro" className="currencyInput" />
                <button onClick={() => addToCart('JPY',jpgAmount)}>Add to cart</button>
            </div>
        </div>
    </div>
}

export default JPY