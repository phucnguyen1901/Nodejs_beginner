
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');

const app = express();
const port = 3000
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
// app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.get('/', (req,res)=>{
    res.render('index',{message:'Good boy',age: 15});
})

app.use('/users',usersRouter);
app.use('/login',authRouter);


app.listen(port,()=>{
    console.log(`Listening port ${port}`);
})