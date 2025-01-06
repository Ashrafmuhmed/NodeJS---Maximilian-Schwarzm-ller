const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const adminData = require('./routers/admin');
const shopRoute = require('./routers/shop');

app.use(express.static(path.join(rootDir , 'public')));
app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin' , adminData.routers);
app.use('/users' , shopRoute);
app.use('/' , (req , res , next) => {
    res.sendFile(path.join(rootDir , 'views' , '404.html'));
})

app.listen(3000);