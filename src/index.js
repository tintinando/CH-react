// -------- MODULES --------
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// -------- COMPONENTS --------
import NavBar from './components/navbar/Navbar.js'
import CategoriesBar from './components/categories/Categories';
import Footer from './components/footer/Footer';
import ItemContainer from './components/itemContainer/ItemContainer.jsx';
import NotFound404 from './components/notFound404/NotFound404.jsx';
import AboutUs from './components/aboutUs/AboutUs.jsx';

// -------- LOGIC --------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <CategoriesBar />
      <Routes>
        <Route exact path="/" element={<ItemContainer />} />
        <Route path="/categories/:idCategory" element={<ItemContainer />} />
        <Route path="/products/:idProduct" element={<ItemContainer />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
