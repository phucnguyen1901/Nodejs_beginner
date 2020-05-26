
let user = require('../database')

module.exports.index = (req,res) =>{
    res.render('users/user',{user:user});
};

module.exports.search = (req,res) =>{
    let q = req.query.nameUser.toLowerCase();
    let matchSearch = user.filter(user =>{
        return user.name.toLowerCase().indexOf(q) !== -1;
    });
    res.render('users/user',{user:matchSearch});
};

module.exports.create = (req,res) =>{
    console.log(req.cookies);
    res.render('users/create');
    // res.render('auth');
};

module.exports.id =  (req,res) =>{
    let idView = req.params.id;
    let arrName = user.filter(element =>{
        return element.id == idView;
    });
    
    let name = arrName[0].name;
    res.send('<h1>Hello User '+name+'</h1>');
};

module.exports.postCreate = (req,res) =>{
    console.log(req.body);
    req.body.img = req.file.path.split('/').slice(1).join('/');
    user.push(req.body);
    res.redirect('/users');
}