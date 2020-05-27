

let user = require('../database');
const _ = require('lodash');


module.exports.product = (req,res) =>{
    // Pagination
    if(!req.query.page){
        let page = 1;
        let x = 3;
        let start = (page - 1)*x;
        // let end = page*x;
        let countPage = Math.ceil(user.length / x);

        let lodash = _.take(_.drop(user,start),x);  
        let countCart = 0; // dem so luong trong gio hang
        if(req.session.cart){
            req.session.cart.forEach(element =>{ // so luong trong gio hang
                countCart += element.count;
            });
        }
        // res.render('products/product',{users:user.slice(start,end),pages:countPage,checkPrevious:1});
        res.render('products/product',{users:lodash,pages:countPage,checkPrevious:1,pageCurrent:1,cart:countCart});
    }else{
        let page = parseInt(req.query.page);

        let checkPrevious = 0;
        if(page == 1){
            checkPrevious = 1
        }
        let x = 3;
        let start = (page - 1)*x;
        // let end = page*x;
        let countPage = Math.ceil(user.length / x);

        let checkNext = 0;
        if(page==countPage){
            checkNext = 1;
        }

        let lodash = _.take(_.drop(user,start),x);  
        let countCart = 0;
        if(req.session.cart){
            countCart = req.session.cart.length; // so luong trong gio hang
        }

        res.render('products/product',
        {
            users:lodash,
            pages:countPage,
            checkPrevious:checkPrevious,
            checkNext:checkNext,
            pageCurrent : page,
            cart: countCart
        });

    }
}







