const express = require('express');
const router = express.Router();

const msgAPIController = require('../controllers/msg-api');
const userAPIController = require('../controllers/user-api');

router.post('/users', userAPIController.registerNewUser);
router.get('/users/login', userAPIController.loginUser);

router.route('/msgs')
    .get(msgAPIController.getAllMessagesOrderedByLastPosted)
    .post(msgAPIController.addNewMessage);

module.exports = router;