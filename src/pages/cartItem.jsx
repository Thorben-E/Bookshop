function cartItem(name, price, amount) {
    return <div className="item-information">
        <h3>{name}</h3>
        <p>{price}$</p>
        <p>{amount}</p>
    </div>
}

export default cartItem