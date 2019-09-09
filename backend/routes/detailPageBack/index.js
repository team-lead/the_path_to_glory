const express = require("express");
const router = express.Router();
const Woman = require("../../models/Woman");
<<<<<<< HEAD

router.get("/:id", (req, res) => {
  Woman.find({ _id: req.params.id }).then((err, goods) => {
    if (err) {
      res.send(err);
    }
    res.json(goods);
  });
});
=======
const Man = require("../../models/Man");
const Accessories = require("../../models/Accessories");

router.get("/:id", async (req, res) => {
  let womenGoodsID = await Woman.find({ _id: req.params.id })
  let menGoodsID = await Man.find({ _id: req.params.id })
  let accessoriesID = await Accessories.find({ _id: req.params.id })
  
  return res.send({womenID: womenGoodsID, menID: menGoodsID, acsID: accessoriesID}) 
  });
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24

module.exports = router;
