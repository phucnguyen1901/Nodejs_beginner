const express = require('express');
const router = express.Router();
const controller = require('../controller/auth.controller');
const validate = require('../validate/login.validate');

router.get('/',controller.login);
router.post('/',controller.postLogin);



module.exports = router;