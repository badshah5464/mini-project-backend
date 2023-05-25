import mongoose from 'mongoose'

const ConnectDb = (MONGO_URI) => {
  mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected db'))
}

export default ConnectDb