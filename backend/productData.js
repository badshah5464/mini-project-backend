import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  title: String,
  imgUrl: String,
  pri: Number,
  dis: Number
})

const productsData = mongoose.model('productData', UserSchema)

export default productsData