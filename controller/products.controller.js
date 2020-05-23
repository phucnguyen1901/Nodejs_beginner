

let user = require('../database');
const _ = require('lodash');


module.exports.product = (req,res) =>{
    // Pagination
    if(!req.query.page){
        let page = 1;
        let x = 3;
        let start = (page - 1)*x;
        let end = page*x;
        let countPage = Math.ceil(user.length / x);

        let lodash = _.drop(user,start);
        let lodash2 = _.take(lodash,x);
        // res.render('products/product',{users:user.slice(start,end),pages:countPage,checkPrevious:1});
        res.render('products/product',{users:lodash2,pages:countPage,checkPrevious:1,pageCurrent:1});
    }else{
        let page = parseInt(req.query.page);

        let checkPrevious = 0;
        if(page == 1){
            checkPrevious = 1
        }
        let x = 3;
        let start = (page - 1)*x;
        let end = page*x;
        let countPage = Math.ceil(user.length / x);

        let checkNext = 0;
        if(page==countPage){
            checkNext = 1;
        }

        res.render('products/product',{users:user.slice(start,end),
            pages:countPage,
            checkPrevious:checkPrevious,
            checkNext:checkNext,
            pageCurrent : page
        });

    }
}







