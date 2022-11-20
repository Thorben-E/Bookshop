import {Outlet, Link} from "react-router-dom"
import { useState } from "react";

const Layout = () => {
  const [cartActive, setCartActive] = useState(false)
  const changeCart = () => {
    console.log('hi')
    if (cartActive === true) {
      setCartActive(false)
    } else {
      setCartActive(true)
    }
  }
  const [cart, setCart] = useState([
        {
            name: 'EURO',
            price: 1.04,
            amount: 0,
        },
        {
            name: 'JPY',
            price: 0.007,
            amount: 0,
        },
        {
            name: 'GBP',
            price: 1.19,
            amount: 0,
        }
  ])
  const addToCart = (currency, amount) => {
    setCart(cart.map((item) => {
        if (item.name === currency) {
            return {...item, amount: item.amount + parseInt(amount)}
        } else {
            console.log('no item')
            return item
        }
    }))
  }
  const consoleCart = (cart) => {
    console.log(cart)
  }
  return (
    <>
      <nav className="navbar">
        <h1>CurrencyShop</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/currencies" addToCart={addToCart} changeCart={changeCart} cartActive={cartActive}>Currencies</Link>
          </li>
          <li>
            <a onClick={() => {consoleCart(cart)}}>Cart ({cart.length})</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
  };

export default Layout 