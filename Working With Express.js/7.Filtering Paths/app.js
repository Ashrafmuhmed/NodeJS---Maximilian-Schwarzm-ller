const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/user');
const app = express() ;

app.use(bodyParser.urlencoded({extended : false }));

app.use('/admin' , adminRoutes);
app.use('/user' , usersRoutes) ;

app.use((req, res , next) => {
    res.status(404).send(
        '<h1>Page is not found</h1>'
    );
});


app.listen(3000);