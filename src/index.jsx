// -------- MODULES --------
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// -------- COMPONENTS --------
import NavBar from './components/navbar/Navbar.jsx'
import CategoriesBar from './components/categories/Categories';
import Footer from './components/footer/Footer';
import ItemContainer from './components/itemContainer/ItemContainer.jsx';
import NotFound404 from './components/notFound404/NotFound404.jsx';
import AboutUs from './components/aboutUs/AboutUs.jsx';
import { CartProvider } from './context/CartContext.jsx';
import ItemDetail from './components/itemDetail/ItemDetail.jsx';
import CartContent from './components/cartWidget/CartContent.jsx';
import Order from './components/order/Order.jsx';

// -------- SCSS --------
// import './scss/custom.scss'

// -------- LOGIC --------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <CategoriesBar />
        <Routes>
          <Route exact path="/" element={<ItemContainer />} />
          <Route path="/categories/:idCategory" element={<ItemContainer />} />
          <Route path="/detail/:idProduct" element={<ItemDetail />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/order" element={<Order />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
