const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router() ;

const products = [] ;

router.get(
    '/add-product',
    (req , res , next) => {
        res.render('add-product' , { pageTitle : 'Add Product' , path: '/admin/add-product'});
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
