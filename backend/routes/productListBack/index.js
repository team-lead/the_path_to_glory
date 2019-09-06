const express = require("express");
const router = express.Router();
const Woman = require("../../models/Woman");
const Man = require("../../models/Man");
const Accessories = require("../../models/Accessories");

router.post("/product-list", (req, res) => {
  const data = req.body;
  const post = new Accessories({
    name: data.name,
    description: data.description,
    price: data.price,
    category: data.category,
    image: data.image,
    ref: data.ref,
    new: data.new,
    subCategory: data.subCategory,
  });

  post.save().then(() => {
    res.send({status: "ok"});
  });
});


router.get("/product-list", async (req, res) => {
  let womenGoods = await Woman.find();
  let menGoods = await Man.find();
  let accessories = await Accessories.find();
  res.send({men: menGoods, women: womenGoods, acs: accessories}).json()
  });


module.exports = router;
