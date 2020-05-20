
module.exports.postCreate = (req,res,next) =>{
    if(!req.body.name){
        res.render('create',{messageError: "Name can't empty"});
        return;
    }
    next();
}

// module.exports.postLogin = (req,res,next) =>{
//     let username = req.body.username;
//     let password = req.body.password;

//     let result = user.filter( element =>{
//         return element.username == username && element.password == password;
//     });
// }


