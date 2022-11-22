import {Outlet, Link} from "react-router-dom"
import { useContext } from "react";
import { CartActiveContext } from "./CartContext";

const Layout = () => {
  const { cartActive, cartDetails } = useContext(CartActiveContext)
  const [cartActiveValue, setcartActiveValue] = cartActive;
  const [cartDetailValue, setcartDetailValue] = cartDetails
  function toggleCart() {
    setcartDetailValue([
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
    setcartActiveValue(true)
  };
  
  return (
    <>
      <nav className="navbar">
        <h1>CurrencyShop</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/currencies' >Currencies</Link>
          </li>
          <li>
            <a onClick={toggleCart}>Cart (length of cart)</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
  };

export default Layout 