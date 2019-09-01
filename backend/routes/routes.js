const userController = require ('../controllers/userController')

module.exports = (app, db) => {
userController(db);

app.get('/users/:id', userController.getUser);
app.post('/users', userController.createNewUser);
app.get('/users', userController.getAllUsers);
app.get('/createSomeUser', userController.createSomeUser);
    
}
