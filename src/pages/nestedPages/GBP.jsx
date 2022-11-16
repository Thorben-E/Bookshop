import { useState } from "react"
function GBP({addThis}) {
    const [gbpAmount, setgbpAmount] = useState(0)
    const handleChange = e => {
        setgbpAmount(e.target.value)
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
               <button onClick={() => addThis('GBP',gbpAmount)}>Add to cart</button>
            </div>
        </div>
    </div>
}

export default GBP