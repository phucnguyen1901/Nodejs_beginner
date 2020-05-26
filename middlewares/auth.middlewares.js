

module.exports.requireAuth = (req,res,next) =>{
    // console.log("Signed cookie : ",req.signedCookies)
//    if(!req.signedCookies.user_id){
//         res.redirect('/login');
//    }

//    if(!userMatch){
//        res.redirect('/login');
//    }
//    console.log("Day la usermatch",userMatch);
//    res.locals.userMatch = userMatch;

//    const userMatch = user.find(element=> element.id == req.signedCookies.user_id);
   if(!req.session.username){
        res.redirect('/login');
        return;
        // res.send("CHua Dang Nhap");
   }
   res.locals.userMatch = req.session.username;
   next();

}




