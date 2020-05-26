const express = require('express');
const router = express.Router();
const controller = require('../controller/cart.controller');


router.get('/:productId',controller.addToCart);



module.exports = router;