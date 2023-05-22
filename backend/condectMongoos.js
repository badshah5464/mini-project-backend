import mongoose from 'mongoose'

mongoose.connect(process.dotenv.MONGO_URI).then(() => console.log('Connected db'))