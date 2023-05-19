import React, { useContext } from 'react'
import { mainContext } from '../App'

const ProductList = () => {
  const { axios, productRender } = useContext(mainContext)

  const RemoveData = async (id) => {
    await axios.delete(`http://localhost:9000/deleteProduct/${id}`).then((x) => {
      console.log(x.data.success);
    })
  }

  const Render = ({ y }) => {
    return (
      <div>
        <span>{y.title}</span>
        <img src={y.imgUrl} alt="" width={'200px'} height={'200px'} />
        <button onClick={() => RemoveData(y._id)}>Remove Product</button>
      </div>
    )
  }

  return (
    <>
      {
        productRender.map((x) => <Render key={x._id} y={x} />)
      }
    </>
  )
}

export default ProductList
