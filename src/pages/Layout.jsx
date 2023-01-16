import {Outlet, Link} from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Layout = ({cartItems}) => {
  
  return (
    <>
      <nav>
        <h1>CurrencyShop</h1>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navlist">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/currencies' >Currencies</Link>
            </li>
            <li>
              <Link to='/cart'>Cart ({cartItems})</Link>
            </li>
          </ul>
        </div>
        
      </nav>

      <Outlet />
    </>
  )
  };

export default Layout 