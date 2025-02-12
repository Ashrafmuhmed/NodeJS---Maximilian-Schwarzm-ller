const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


const sequelize = require('./utils/database');
const rootDir = require('./utils/path');
const adminRoutes = require('./routers/admin');
const shopRoute = require('./routers/shop');
const undefinedRouteController = require('./controllers/undefinedRoute');


app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes.routers);
app.use('/users', shopRoute);
app.use('/', undefinedRouteController.getUndefinedRoute)

sequelize.sync().then(
    result => {
        // console.log(result);
        app.listen(3000);
    }
).catch(
    err => {
        console.log(err) ;
    }
)


