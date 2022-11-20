import { useState } from "react"
function Cart({cart}) {
    return <>
            <div className="cart">
                <h2>Your cart</h2>
                {cart.map((item) => {
                    <cartItem name={item.name} price={item.price} amount={item} />
                })}
                <p>Total: </p>
                <button className="checkoutButton">Checkout</button>
                <button className="closeButton" onClick={changeCart}>Close</button>
            </div>
        </>
}

export default Cart