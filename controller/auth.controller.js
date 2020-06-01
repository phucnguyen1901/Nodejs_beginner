
const User = require('../models/user.model');

module.exports.login = (req,res) =>{
    res.render('auth/auth');
}

module.exports.postLogin = async (req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    let user = await User.find();
    let result = user.filter( element =>{
        return element.username == username && element.password == password;
    });
    console.log(req.body);
    console.log(result);
    if(result.length !== 0){
        // res.render('auth/authSuccess',{notify: result[0].name});
        // res.cookie('user_id',result[0].id,{
        //     signed: true
        // });
        req.session.username = result[0].name;
        res.redirect('/users');
    }else{
        res.render('auth/auth',{errorMessage:"Tài khoản không tồn tại",username:username,password:password});
    }
}












