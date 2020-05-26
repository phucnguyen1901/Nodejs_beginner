
let user = require('../database');

module.exports.addToCart = (req,res,next) =>{
    let productId = req.params.productId;
    if(!req.session.cart){
        req.session.cart = [{productId:1}];
    }
    let cart = req.session.cart[0].productId;
    cart = cart +1;
    // if(cart==productId){
    //     // cart: cart+1
    //     cart = cart+1;
    // }

    console.log(cart);
    // if(!sessionId){
    //     res.redirect('/products');
    // }

    // let sessionMatch = user.find({sessionLocal:sessionId});

    next();
};
