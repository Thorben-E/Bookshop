function cartItem(foto, name, price, description) {
    return <div>
        <img src={foto} alt="Img could not load" />
        <div className="item-information">
            <h3>{name}</h3>
            <p>{price}$</p>
            <p>{description}</p>
        </div>
    </div>
}

export default cartItem