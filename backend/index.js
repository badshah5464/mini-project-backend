import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('/addproduct', async (req, res) => {
  console.log(req.body);
})

app.get('/', (req, res) => {
  res.send("<h1>Welcome in Backend</h1>")
})

app.listen(3005, () => { console.log('Server Started'); })