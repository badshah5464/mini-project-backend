import React, { useContext } from 'react'
import { mainContext } from '../App'

const ProductList = () => {

  const { RemoveData, productRender } = useContext(mainContext)

  const Render = ({ y }) => {
    return (
      <div>
        <p>{y._id}</p>
        <p>{y.title}</p>
        <img src={y.imgUrl} alt="" width={'200px'} height={'200px'} />
        <button onClick={() => RemoveData(y._id)}>Remove Product</button>
        <hr />
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
