import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import AddProduct from './Components/AddProduct';
import ProductData from './Components/ProductData';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AddProduct' element={<AddProduct />} />
        <Route path='ProductData' element={<ProductData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
