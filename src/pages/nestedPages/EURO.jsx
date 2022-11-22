import { useState } from "react"

function EURO({ addToCart }) {
    const [euroAmount, setEuroAmount] = useState(0)
    const handleChange = e => {
        setEuroAmount(e.target.value)
    }
    return <div className="currency">
        <img className="currencypageImg" src="/src/assets/euro.jpg" alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>Euro</h3>
                <p>1.04$</p>
            </div>
            <div className="buttons">
                <input type="number" onChange={handleChange} name="euro" id="euro" className="currencyInput" />
                <button onClick={() => {addToCart('EURO',euroAmount)}}>Add to cart</button>
            </div>
        </div>
    </div>
}

export default EURO