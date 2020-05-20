
let user = require('../database');

module.exports.login = (req,res) =>{
    res.render('auth/auth');
}

module.exports.loginSuccess = (req,res) =>{
    res.render('auth/authSuccess');
}

module.exports.postLogin = (req,res) =>{
    let username = req.body.username;
    let password = req.body.password;

    let result = user.filter( element =>{
        return element.username == username && element.password == password;
    });

    if(result.length !== 0){
        res.redirect('login/loginSuccess');
    }else{
        res.render('auth/auth',{errorMessage:"Tài khoản không tồn tại",username:username,password:password});
    }
}












