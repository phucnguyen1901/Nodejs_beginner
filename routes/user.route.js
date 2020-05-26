const express = require('express');
const router = express.Router();
const controller = require('../controller/users.controller');
const validate = require('../validate/user.validate');
const middleWares = require('../middlewares/auth.middlewares'); 
const multer = require('multer');

let upload = multer({ dest: './public/uploads/' });

// router.get('/',(req,res)=>{if(!req.session.username){res.redirect('/login');}},controller.index);
router.get('/',middleWares.requireAuth,controller.index);

const cookie = (req,res,next) =>{
    res.cookie('user-cookie',1235);
    res.send('hello');
}
 
router.get('/cookie',cookie);
router.get('/search', controller.search)

router.get('/create', controller.create )

router.get('/:id', controller.id)

router.post('/create',upload.single('img'),validate.postCreate, controller.postCreate);

module.exports = router;