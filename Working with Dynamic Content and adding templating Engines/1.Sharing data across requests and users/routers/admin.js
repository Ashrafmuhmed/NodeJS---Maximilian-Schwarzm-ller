const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router() ;

const products = [] ;

router.get(
    '/add-product',
    (req , res , next) => {
        res.sendFile(
            path.join(rootDir , 'views' , 'add-product.html')
        )
    }
);

router.post(
    '/add-product' , 
    (req ,res, next) => {
        console.log(req.body.title);
        let productTitle = req.body.title ;
        products.push({'productTitle' : productTitle});
        res.redirect('/users/shop');
    }
)

module.exports = {
    routers : router , 
    products : products
}
