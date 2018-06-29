const express = require('express');
const app = express();
const productRouter = require('./api/routes/products');
const ordersRouter = require('./api/routes/orders');
const usersRouter = require('./api/routes/users');
const checkAuth = require('./api/middleWares/middleWares');

// let passport = require('passport');
// let LocalStrategy = require('passport-local').Strategy;

// app.use(require('express-session')({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded());


app.get('/', function (req, res, next) {
    res.sendFile(__dirname+'/static/index.html');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
})
app.use('/products', productRouter); //checkAuth,
    app.use('/orders', ordersRouter);
app.use('/users', usersRouter);


module.exports = app;



