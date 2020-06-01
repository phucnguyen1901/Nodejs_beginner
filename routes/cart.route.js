const express = require('express');
const router = express.Router();
const controller = require('../controller/cart.controller');


router.post('/',controller.addToCart);



module.exports = router;