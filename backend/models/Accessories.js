const mongoose = require("mongoose");
const Accessories = mongoose.model("Accessories", {
  category: String,
  images: Array,
  name: String,
  subCategory: String,
  ref: String,
  description: Array,
  new: Boolean,
  price: String,
});

module.exports = Accessories;