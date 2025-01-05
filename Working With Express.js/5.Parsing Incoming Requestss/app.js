const express = require('express');
const bodyParser = require('body-parser');
const app = express() ;

app.listen(3000) ;
app.use(bodyParser.urlencoded());
app.use(
    '/',
    (req , res , next) => {
        console.log('New request recieved url : ' + req.url + '  and method : ' + req.method );
        next();
    }
);

app.use(
    '/add-product', 
    (req , res , next) => {
        console.log('New product is being added');
        res.send('<h2> Add new product nowww </h2> <br> <form action = "/products" method = "POST"> <input type = "text" name = "product_name"> <button type = "submit">Add Product</button></form>');
    }
);

app.post(
    '/products' ,
    (req , res , next) => {
        // console.log('New product added succesfully');
        console.log(req.body);
        
        
        res.send('<h1>New product added ! - > ' + req.body.product_name + ' </h1> ');
    }
)

app.use(
    (req , res , next) => {
        console.log('Unknown request sent');
        res.send('<h1>Unknown <bold> PATH 404 </bold> </h1>');
    }
);

