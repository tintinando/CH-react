// -------- MODULES --------
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

// -------- STYLE --------
import './index.css';

// -------- COMPONENTS --------
import NavBar from './components/navbar/Navbar.js'
import CategoriesBar from './components/categories/Categories';

// -------- CORE --------
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';

// -------- LOGIC --------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <CategoriesBar />
    <Products />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
