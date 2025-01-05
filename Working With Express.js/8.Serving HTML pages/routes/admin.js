const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router() ;

const products = [] ;

router.get(
    '/add-product' ,
    (req ,res, next) => {
        res.status(200).sendFile(
            path.join(rootDir , 'views' , 'add-product.html')
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