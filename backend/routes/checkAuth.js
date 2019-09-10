const router = require("express").Router();
const {checkAuth, profile, updateUser, deliteUser} = require("../controllers/checkAuth");

router.get("/profile", checkAuth, profile);
router.post("/updateuser", checkAuth, updateUser);
router.get("/deliteuser", checkAuth, deliteUser)

module.exports = router;
