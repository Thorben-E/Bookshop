import {Outlet, Link} from "react-router-dom"
import { useState } from "react";

const Layout = () => {
  const [cartActive, setCartActive] = useState(false)
  const changeCart = () => {
    if (cartActive === true) {
      setCartActive(false)
    } else {
      setCartActive(true)
    }
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
            <Link to="/currencies">Currencies</Link>
          </li>
          <li>
            <Link to="/cart" /* changeCart={changeCart} */>Cart ( )</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
  };

export default Layout 