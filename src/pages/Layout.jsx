import {Outlet, Link} from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useEffect } from "react";

const Layout = ({cartItems}) => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <>
      <nav>
        <h1>BookShop</h1>
        
        {screen.width < 500 ? <a href="#" className="toggle-button" id="toggle-button" onClick={() => setDropdown((prev) => !prev)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>: <div className="navlist">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/currencies' >Books</Link>
            </li>
            <li>
              <Link to='/cart'>Cart ({cartItems})</Link>
            </li>
          </ul>
        </div> }
        {dropdown && <div className="navlist">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/currencies' >Books</Link>
            </li>
            <li>
              <Link to='/cart'>Cart ({cartItems})</Link>
            </li>
          </ul>
        </div>}
        
        
      </nav>

      <Outlet />
    </>
  )
  };

export default Layout 