const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');
const path = require('path');
const usersRouter = require('./routes/users');


const app = express() ;


app.use(express.static(path.join(rootDir , 'public')));
app.use(bodyParser.urlencoded({extended : false}));

app.use('/users' , usersRouter);


app.listen(3000);