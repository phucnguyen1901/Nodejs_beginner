
const express = require('express');
const router = express.Router();
const controller = require('../controller/products.controller');


router.get('/',controller.product);

module.exports = router;




