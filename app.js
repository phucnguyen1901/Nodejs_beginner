
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const productsRouter = require('./routes/product.route');
const cartRouter = require('./routes/cart.route');
const mongoose = require('mongoose');
require('dotenv/config')

mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser:true }, 
  ()=>console.log("Connected MongoDB")
);



// const csurf = require('csurf');



const session = require('express-session');

const app = express();
const port = 3000

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'umbalasibua',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60*24 }
}))
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
// app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser("siakasdfn202ads"));
// app.use(session);
app.use(express.static('public'));
// app.use(csurf({cookie:true}))


app.get('/', (req,res)=>{
    res.render('index',{message:'Good boy',age: 15});
})

app.use('/users',usersRouter);
app.use('/login',authRouter);
app.use('/products',productsRouter);
app.use('/cart',cartRouter);

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
})