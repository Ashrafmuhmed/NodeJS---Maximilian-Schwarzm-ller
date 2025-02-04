const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const database = require('./utils/database');

const rootDir = require('./utils/path');
const adminRoutes = require('./routers/admin');
const shopRoute = require('./routers/shop');
const undefinedRouteController = require('./controllers/undefinedRoute');

database.execute('SELECT * FROM products').then(
    result => {
        console.log(result[0] , '---' ,result[1]);
    }
).catch(
    err => console.log(err) 
);

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes.routers);
app.use('/users', shopRoute);
app.use('/', undefinedRouteController.getUndefinedRoute)

app.listen(3000);