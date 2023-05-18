import React from 'react'

const AddProduct = () => {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="heading">Heading : </label>
          <input type="text" name="heading" />
        </div>
        <div>
          <label htmlFor="title">Title : </label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="imgUrl">Img Url : </label>
          <input type="text" name="imgUrl" />
        </div>
        <div>
          <label htmlFor="price">price : </label>
          <input type="number" name="pri" />
        </div>
        <div>
          <label htmlFor="discount">Discount : </label>
          <input type="number" name="dis" />
        </div>
        <div>
          <input type="submit" value="Add Product" />
        </div>
      </form>
    </section>
  )
}

export default AddProduct