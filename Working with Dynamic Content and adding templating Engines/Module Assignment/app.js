const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootDir = require('./utils/path-root')
const app = express() ;

const adminData = require('./routes/add-user');
const userRoute = require('./routes/users');

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(rootDir , 'public')));

app.use(
    '/register' , adminData.route
);

app.use(
    '/users' , 
    userRoute
);

app.use(
    (req , res , next) => {
        res.render('404' , {
            pageTitle : 'Page is not found',
            path : 'NN'
        })
    }
)


app.listen(3000);
