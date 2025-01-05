const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/user');
const rootDir = require('./util/path');
const app = express() ;

app.use(bodyParser.urlencoded({extended : false }));
app.use(express.static(path.join(rootDir , 'public')));

app.use('/admin' , adminRoutes);
app.use('/user' , usersRoutes) ;

app.use((req, res , next) => {
    res.status(404).sendFile(
        path.join(__dirname , 'views' , '404-Error.html')
    );
});


app.listen(3000);