

module.exports.addToCart = (req,res,next) =>{
    let productId = req.body.productId;
    if(!req.session.cart){
        req.session.cart = [{
            id: productId,
            count: 1
        }];
    }else{
        console.log('Da co session');
        sessionCart = req.session.cart.find(element => element.id == productId); //object session
        if(sessionCart){
            // location in session
            indexCart = req.session.cart.findIndex(element =>{return element.id == sessionCart.id});
            req.session.cart[indexCart].count = req.session.cart[indexCart].count +1;
        }else{
            req.session.cart.push({
                id: productId,
                count:1
            });
        }

    }
    if(req.body.pageCurrent){
        console.log(req.session.cart);    
        res.redirect('/products?page='+req.body.pageCurrent);
    }else{
        res.redirect('/products');
    }

    next();
};
