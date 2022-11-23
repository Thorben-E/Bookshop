import {Outlet, Link} from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Layout = () => {
  const { cartActive, cartDetails } = useContext(CartContext)
  const [cartActiveValue, setcartActiveValue] = cartActive;
  const [cartDetailValue, setcartDetailValue] = cartDetails
  function toggleCart() {
    setcartActiveValue(true)
  };
  
  const [cartAmount, setcartAmount] = useState(0)

  const calcCartAmount = () => {
    const value = 0
    cartDetailValue.forEach(element => {
      if (element.amount > 0) {
        value =+ 1
      }
    });
    setcartAmount(value)
  }
  
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
          <button onClick={calcCartAmount}>update cart amount</button>
          <li>
            <a onClick={toggleCart}>Cart ({cartAmount})</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
  };

export default Layout 