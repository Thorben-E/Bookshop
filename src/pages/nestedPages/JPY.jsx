function JPY({addThis}) {
    return <div className="currency">
        <img className="currencypageImg" src="/src/assets/jpy.png" alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>JPY</h3>
                <p>Description</p>
                <p>prijs</p>
            </div>
            <div className="buttons">
                <button>-</button>
                <button onClick={() => addThis('JPY')}>Add to cart</button>
                <button>+</button>
            </div>
        </div>
    </div>
}

export default JPY