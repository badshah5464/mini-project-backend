import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {

  const [product, setProduct] = useState({
    title: '',
    imgUrl: '',
    pri: '',
    dis: ''
  })

  const productAdd = (e) => {
    e.preventDefault()
    axios.post('https://codekaro-123.onrender.com/productData', product).then((Response) => {
      alert(Response.data.message)
    })
  }

  const productDetail = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  return (
    <section>
      <form onSubmit={productAdd}>
        <div>
          <label htmlFor="title">Title : </label>
          <input value={product.title} onChange={productDetail} type="text" name="title" />
        </div>
        <div>
          <label htmlFor="imgUrl">Img Url : </label>
          <input value={product.imgUrl} onChange={productDetail} type="text" name="imgUrl" />
        </div>
        <div>
          <label htmlFor="price">price : </label>
          <input value={product.pri} onChange={productDetail} type="number" name="pri" />
        </div>
        <div>
          <label htmlFor="discount">Discount : </label>
          <input value={product.dis} onChange={productDetail} type="number" name="dis" />
        </div>
        <div>
          <input type="submit" value="Add Product" />
        </div>
      </form>
    </section>
  )
}

export default AddProduct