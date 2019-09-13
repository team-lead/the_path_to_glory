const express = require("express");
const router = express.Router();
const Woman = require("../../models/Woman");

const Man = require("../../models/Man");
const Accessories = require("../../models/Accessories");

router.get("/:id", async (req, res) => {
  let womenGoodsID = await Woman.find({ _id: req.params.id })
  let menGoodsID = await Man.find({ _id: req.params.id })
  let accessoriesID = await Accessories.find({ _id: req.params.id })
  
  return res.send({womenID: womenGoodsID, menID: menGoodsID, acsID: accessoriesID}) 
  });


module.exports = router;
