function Cart({ cart, addItemToCart, removeItemFromCart }) {
    const handleChange = (e, item) => {
        if (e.target.value > item.amount) {
            addItemToCart(item)
        } else {
            removeItemFromCart(item)
        }
    }

    return ( <div className="cart">
        {cart.length > 0 ? <>
            <h1>Your Cart</h1>
            <div className="items">
                {cart.map((item) => {
                    return <div key={item.name} className="item">
                    <img src={item.img} className="currencypageImg" alt="" />
                    <h3>{item.name}</h3>
                    <p>$ {item.price}</p>
                    <div className="amount">
                        <button className="cartPlusAndMinus" onClick={() => removeItemFromCart(item)}>-</button>
                        <input className="amountInput" onChange={(e) => {handleChange(e, item)}} type="number" value={item.amount} />
                        <button className="cartPlusAndMinus" onClick={() => addItemToCart(item)}>+</button>
                    </div>
                    <p className="removeItem" onClick={() => removeItemFromCart(item, true)}>remove item</p>
                    </div>
                })}
            </div>
            
            <p>
                total: {cart.reduce((total, item) => {
                return total + item.price * item.amount;
                }, 0)
                .toFixed(3)}
            </p>
            <button className="checkout-btn" onClick={() => alert('You would pay here')}>Checkout</button>
        </> : <h2>No Items in cart</h2>}
    </div>       
    )
}

export default Cart