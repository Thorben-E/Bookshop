function EURO({addThis}) {
    return <div className="currency">
        <img className="currencypageImg" src="/src/assets/euro.jpg" alt="" />
        <div className="rightside">
            <div className="currencyinfo">
                <h3>Euro</h3>
                <p>Description</p>
                <p>prijs</p>
            </div>
            <div className="buttons">
                <button>-</button>
                <button onClick={() => addThis('Euro')}>ADD to cart</button>
                <button>+</button>
            </div>
        </div>
    </div>
}

export default EURO