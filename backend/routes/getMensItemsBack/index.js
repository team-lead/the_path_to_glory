const express = require("express");
const router = express.Router();
const Man = require("../../models/Man");

router.get("/mens", async (req, res) => {
  let menGoods = await Man.find();
  return res.send({men: menGoods}).json()
})

module.exports = router;
