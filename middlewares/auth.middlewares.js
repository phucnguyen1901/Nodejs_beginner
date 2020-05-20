
let user = require('../database');

module.exports.requireAuth = (req,res,next) =>{
   if(!req.cookies.user_id){
        res.redirect('/login');
   }

   const userMatch = user.find(element=> element.id == req.cookies.user_id);
   console.log("userMatch: ",userMatch);
   if(!userMatch){
       res.redirect('/login');
   }

   next();
}




