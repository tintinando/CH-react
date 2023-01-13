// -------- MODULES --------
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

// -------- COMPONENTS --------
import NavBar from './components/navbar/Navbar.js'
import CategoriesBar from './components/categories/Categories';
import Footer from './components/footer/Footer';
import ItemContainer from './components/itemContainer/ItemContainer.jsx';

// -------- LOGIC --------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <CategoriesBar />
    <ItemContainer />
    <Footer />
  </React.StrictMode>
);
