import {Outlet, Link} from "react-router-dom"

const Layout = () => {
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
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };

export default Layout 