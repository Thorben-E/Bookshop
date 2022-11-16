import { useState } from "react"
function JPY({addThis}) {
    const [jpgAmount, setjpgAmount] = useState(0)
    const handleChange = e => {
        setjpgAmount(e.target.value)
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
                <button onClick={() => addThis('JPY',jpgAmount)}>Add to cart</button>
            </div>
        </div>
    </div>
}

export default JPY