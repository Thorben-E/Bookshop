import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
function GBP() {
    const [gbpAmount, setgbpAmount] = useState(0)
    const handleChange = e => {
        setgbpAmount(e.target.value)
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
        <img className="currencypageImg" src="/src/assets/gbp.png" alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>GBP</h3>
                <p>1.19$</p>
            </div>
            <div className="buttons">
               <input type="number" onChange={handleChange} name="euro" id="euro" className="currencyInput" />
               <button onClick={() => addToCart('GBP',gbpAmount)}>Add to cart</button>
            </div>
        </div>
    </div>
}

export default GBP