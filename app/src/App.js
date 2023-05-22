import React, { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import AddProduct from './Components/AddProduct';
import axios from 'axios'
import ProductList from './Components/ProductList';

export const mainContext = createContext()
function App() {

  let [productRender, setProductRender] = useState([])

  const product = async () => {
    await axios.get('http://localhost:3005/getProduct').then((x) => {
      setProductRender(x.data.RenderProductData)
    })
  }

  useEffect(() => {
    product()
  }, [])

  const RemoveData = async (id) => {
    await axios.delete(`http://localhost:3005/deleteProduct/${id}`).then((x) => {
      console.log(x.data.success);
      if (x.data.success) {
        product()
      }
    })
  }

  return (
    <BrowserRouter>
      <mainContext.Provider value={{ RemoveData, productRender }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='AddProduct' element={<AddProduct />} />
          <Route path='ProductList' element={<ProductList />} />
        </Routes>
      </mainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
