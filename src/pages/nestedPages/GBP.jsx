function GBP({addThis}) {
    return <div className="currency">
        <img className="currencypageImg" src="/src/assets/gbp.png" alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>GBP</h3>
                <p>Description</p>
                <p>prijs</p>
            </div>
            <div className="buttons">
                <button>-</button>
                <button onClick={() => addThis('GBP')}>Add to cart</button>
                <button>+</button>
            </div>
        </div>
    </div>
}

export default GBP