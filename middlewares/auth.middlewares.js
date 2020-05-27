

module.exports.requireAuth = (req,res,next) =>{
   if(!req.session.username){
        res.redirect('/login');
        return;
        // res.send("CHua Dang Nhap");
   }
   res.locals.userMatch = req.session.username;
   next();

}




