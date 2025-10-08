const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const {v4: uuid} = require('uuid');
const app = express();
const User= require('./models/user') ; 
const DB = require('./util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    (req, res, next) => {
        User.fetchUser( "68dfc57248cace10c4c78899" ).then(
            user => {
                console.log( user ) ; 
                if( user ){
                    req.user = new User( user.username , user.password , user.email , user.cart , user._id ) ; 
                    next() ; 
                }
            }
        ).catch( err => console.log(err) ) ;
    }
)

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


DB.mongoConnect(
    () => {

        app.listen(3000);
    }
)