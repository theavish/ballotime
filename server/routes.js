var router = require('express').Router();
var userRoutes = require('./routes/users');

//get a list of all users
router.get('/users', userRoutes.getAllUsers);

//add new user
router.post('/users', userRoutes.saveUser);

//delete a specific user
router.delete('/user/:id', userRoutes.deleteUser);

//get a single user
router.get('/user/:id', userRoutes.getUser);

module.exports = router;
