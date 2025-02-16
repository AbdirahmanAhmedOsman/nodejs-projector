const express = require('express');

const router = express.Router();

const userController = require('../controllers/budgetcontroller');

router.post('/api/user' , userController.createUser);
router.get('/api/user' , userController.getUsers)
router.put('/api/user/:id', userController.updateUseer);
router.delete('/api/user/:id', userController.deleteUser);

router.get('/login' , userController.login);

module.exports = router;