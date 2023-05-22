import React, { useContext } from 'react'
import { mainContext } from '../App'

const Home = () => {
  const { productRender } = useContext(mainContext)

  const UserSide = ({ y }) => {
    return (
      <div className='userProduct'>
        <div>
          <h3>{y.title}</h3>
          <img src={y.imgUrl} alt="Product's" />
          <p><span>{y.pri}/-</span> <span>{y.dis}% off</span></p>
        </div>
      </div>
    )
  }
  return (
    <div>
      <h1>Client Product's</h1>
      <div>
        {
          productRender.map((x) => <UserSide key={x._id} y={x} />)
        }
      </div>
    </div>
  )
}

export default Home