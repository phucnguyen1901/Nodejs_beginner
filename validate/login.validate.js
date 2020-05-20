

module.exports.postLogin = (req,res,next) =>{

    if(!req.body.username || !req.body.password){
        res.render('auth/auth', {errorMessage: "Rong"});
    }
    next();
}









