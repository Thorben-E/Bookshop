import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import Currencies from './pages/currencies';
import Home from './pages/Home';
import Layout from './pages/Layout';
import EURO from './pages/nestedPages/EURO';
import JPY from './pages/nestedPages/JPY';
import GBP from './pages/nestedPages/GBP';
import Cart from './pages/cart';
import { CartContext } from './pages/CartContext';
import { useState } from 'react';
import './style.css'

export default function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const itemindex = cart.findIndex((i) => i.name === item.name);
    if (itemindex > -1) {
      const newCart = cart.slice();
      newCart[itemindex].amount++;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  }

  const removeItemFromCart = (item, removeAll) => {
    const itemindex = cart.findIndex((i) => i.name === item.name);
    if (itemindex > -1) {
      const newCart = cart.slice();
      if (newCart[itemindex].amount <= 1) removeAll = true
      removeAll ? newCart.splice(itemindex, 1) : newCart[itemindex].amount--; 
      setCart(newCart);
    }  
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartItems={cart.length} />}>
        <Route index element={<Home />} />
        <Route path="currencies" element={<Currencies 
          cart={cart}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart} />} />
        <Route path='cart' element={<Cart 
          cart={cart}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart} />} />
        <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
