const express = require("express");
const router = express.Router();
const Man = require("../../models/Man");
const Accessories = require("../../models/Accessories");
const Woman = require("../../models/Woman");

const goodsRoutes = ["/mens", "/womens", "/accessories"];

goodsRoutes.forEach(name => {
    router.get(name, async (req, res) => {
        if(name === "/mens") {
            let menGoods = await Man.find();
            return res.send({mens: menGoods}).json()
        } else if(name === "/womens") {
            let womensGoods = await Woman.find();
            return res.send({womens: womensGoods}).json()
        } else if(name === "/accessories") {
            let acsGoods = await Accessories.find();
            return res.send({acs: acsGoods}).json()
        } else {
            return res.send("err")
        }
      })
})


  
  module.exports = router;