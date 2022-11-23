import {Outlet, Link} from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Layout = () => {
  const { cartActive, cartDetails, total } = useContext(CartContext)
  const [cartActiveValue, setcartActiveValue] = cartActive;
  const [cartDetailValue, setcartDetailValue] = cartDetails
  const [totalValue, setTotalValue] = total
  function toggleCart() {
    setcartActiveValue(true)
  };
  
  return (
    <>
      <nav className="navbar">
        <h1>CurrencyShop</h1>
        <ul className="navlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/currencies' >Currencies</Link>
          </li>
          <li>
            <a onClick={toggleCart}>Cart ({totalValue})</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
  };

export default Layout 