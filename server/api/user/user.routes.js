const controller = require('./user.controller');
const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();

router.get('/home/:name', controller.findUserInfoByName);

module.exports = router;
