const router = require("express").Router();
const {checkAuth, profile, updateUser} = require("../controllers/checkAuth");


router.get("/profile", checkAuth, profile);
router.put("/updateuser", checkAuth, updateUser);

module.exports = router;


// const userController = require ('../controllers/userController')

// module.exports = (app, db) => {
// userController(db);

// app.get('/users/:id', userController.getUser);
// app.post('/users', userController.createNewUser);
// app.get('/users', userController.getAllUsers);
// app.get('/createSomeUser', userController.createSomeUser);
    
// }

