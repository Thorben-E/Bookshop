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

  const addItemToCart = (itemId) => {

  }

  const removeItemFromCart = (itemId) => {

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartItems={cart.length} />}>
        <Route index element={<Home />} />
        <Route path="currencies" element={<Currencies />} />
          <Route path='euro' element={<EURO />} />
          <Route path='jpy' element={<JPY />} />
          <Route path='gbp' element={<GBP />} />
          <Route path='cart' element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
