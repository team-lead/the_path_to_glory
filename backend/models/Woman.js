const mongoose = require("mongoose");
const Woman = mongoose.model("Woman", {
  name: String,
  description: Array,
  price: String,
  category: String,
  image: Array,
  ref: String,
  new: Boolean,
});

module.exports = Woman;