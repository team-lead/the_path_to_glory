const router = require("express").Router();
const auth = require("../middleware/auth");
const {addHistoryItem} = require("../controllers/history");

router.post("/history", auth, addHistoryItem);

module.exports = router;