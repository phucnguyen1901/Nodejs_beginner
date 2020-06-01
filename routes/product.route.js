
const express = require('express');
const router = express.Router();
const controller = require('../controller/products.controller');
const middleWare = require('../middlewares/auth.middlewares')

router.get('/',controller.product);

module.exports = router;




