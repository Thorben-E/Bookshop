import {Outlet, Link} from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useEffect } from "react";

const Layout = ({cartItems}) => {
  useEffect(() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navlist')[0]
    toggleButton.addEventListener('click', () => {
      console.log('click')
      if (navbarLinks.style.display = 'none') {
        navbarLinks.style.display = 'block';
      } else {
        navbarLinks.style.display = 'none'
      }
    })
  })
  
  return (
    <>
      <nav>
        <h1>CurrencyShop</h1>
        <a href="#" className="toggle-button" id="toggle-button">
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