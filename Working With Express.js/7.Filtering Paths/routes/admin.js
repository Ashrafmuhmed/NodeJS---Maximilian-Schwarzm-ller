const express = require('express');


const router = express.Router() ;

const products = [] ;

router.get(
    '/add-product' ,
    (req ,res, next) => {
        res.status(200).send(
           '<form action = "/admin/add-product" method = "POST"><input type= "text" name= "product_name"><input type= "submit" value = "submit"></></input></form>'
        );
    }
);

router.post(
    '/add-product' ,
    (req ,res ,next) => {
        
        products.push(req.body.product_name);
        console.log(req.body , products);
        res.send(
            '<h1>Products</h1> <br> <p>' + products.toString() + '</p>'
        );
    }
);

module.exports = router ;