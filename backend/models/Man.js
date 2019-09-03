const mongoose = require("mongoose");
const Man = mongoose.model("Man", {
  name: String,
  description: Array,
  price: String,
  category: String,
  image: Array,
  ref: String,
  new: Boolean,
});

module.exports = Man;