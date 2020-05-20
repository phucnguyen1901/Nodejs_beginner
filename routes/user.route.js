const express = require('express');
const router = express.Router();
const controller = require('../controller/users.controller');
const validate = require('../validate/user.validate');


router.get('/',controller.index )

const cookie = (req,res,next) =>{
    res.cookie('user-cookie',1235);
    res.send('hello');
}
 
router.get('/cookie',cookie);
router.get('/search', controller.search)

router.get('/create', controller.create )

router.get('/:id', controller.id)

router.post('/create',validate.postCreate, controller.postCreate);

module.exports = router;