const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/api/all/users', /* auth.authenticate(), */ userController.getAllUsers);
router.post('/api/create/user', userController.createUser);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;