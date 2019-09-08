const express = require("express");
const router = express.Router();
const Woman = require("../../models/Woman");

router.get("/womens", async (req, res) => {
  let WomensGoods = await Woman.find();
  return res.send({women: WomensGoods}).json()
})

module.exports = router;