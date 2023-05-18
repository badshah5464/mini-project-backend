import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  title: String,
  imgUrl: String,
  pri: Number,
  dis: Number
})

const productsData = mongoose.model('register', UserSchema)

export default productsData