const express = require("express");
const router = express.Router();
const Accessories = require("../../models/Accessories");

router.get("/accessories", async (req, res) => {
  let acsGoods = await Accessories.find();
  return res.send({acs: acsGoods}).json()
})

module.exports = router;
