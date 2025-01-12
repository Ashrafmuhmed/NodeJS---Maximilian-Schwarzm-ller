const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const adminData = require('./routers/admin');
const shopRoute = require('./routers/shop');


app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminData.routers);
app.use('/users', shopRoute);
app.use('/', (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Not found page'
    });
})

app.listen(3000);