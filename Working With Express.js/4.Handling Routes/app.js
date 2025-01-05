const express = require('express');

const app = express() ;

app.listen(3000);

app.use(
    '/add-product' , 
    (req , res , next) =>{
        console.log('Adding new product');
        res.send('<h3>Adding new product</h3>');
    }
)
app.use(
    '/',
    (req , res , next) => {
        console.log('Unknown route  ' + req.url + '   ' + req.method) ;
        // res.send('<h1>Helloooooooo</h1>');
        next();
    }
);



