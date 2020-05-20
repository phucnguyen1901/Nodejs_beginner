const express = require('express');
const router = express.Router();
const controller = require('../controller/auth.controller');


router.get('/',controller.login);
router.get('/loginSuccess',controller.loginSuccess);
router.post('/',controller.postLogin);


module.exports = router;