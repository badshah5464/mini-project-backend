import express from 'express'
import cors from 'cors'
import './condectMongoos.js'
import productsData from './productData.js'
//! npm i dotenv
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send("<h1>Welcome in Backend</h1>")
})

app.post('/productData', async (req, res) => {
  const data = productsData({
    title: req.body.title,
    imgUrl: req.body.imgUrl,
    pri: req.body.pri,
    dis: req.body.dis
  })

  const result = await data.save()

  if (result) {
    res.send({ success: true, message: 'Product Added' })
  } else {
    res.send({ success: false, message: 'err' })
  }
})

app.get('/getProduct', async (req, res) => {
  const RenderProductData = await productsData.find({})
  res.send({ success: true, RenderProductData: RenderProductData })
})

app.delete('/deleteProduct/:id', async (req, res) => {
  await productsData.findByIdAndDelete(req.params.id).then(() => {
    res.send({ success: true })
  })
})

app.listen(3005, () => console.log('port 3005 Server Started'))
