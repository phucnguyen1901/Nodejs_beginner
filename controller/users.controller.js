
let user = [
        {name:"Phuong",id:1},
        {name: 'Hong',id:2},
        {name:"Tinh",id:3},
        {name: 'Lo',id:4}
]

module.exports.index = (req,res) =>{
    res.render('user',{user:user});
};

module.exports.search = (req,res) =>{
    let q = req.query.nameUser.toLowerCase();
    let matchSearch = user.filter(user =>{
        return user.name.toLowerCase().indexOf(q) !== -1;
    });
    res.render('user',{user:matchSearch});
};

module.exports.create = (req,res) =>{
    res.render('create');
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
    if(!req.body.name){
        res.render('create',{messageError: "Name can't empty"});
    }else{
        console.log(req.body);
        user.push(req.body);
        res.redirect('/users');
    }
}