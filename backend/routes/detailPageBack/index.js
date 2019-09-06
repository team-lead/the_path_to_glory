const express = require("express");
const router = express.Router();
const Woman = require("../../models/Woman");

router.get("/:id", (req, res) => {
  Woman.find({ _id: req.params.id }).then((err, goods) => {
    if (err) {
      res.send(err);
    }
    res.json(goods);
  });
});

module.exports = router;
