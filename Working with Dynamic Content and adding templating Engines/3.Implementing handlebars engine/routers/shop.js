const express = require('express');
const rootDir = require('../utils/path')
const router = express.Router();
const path = require('path');
const adminData = require('./admin');
router.get(
    '/shop',
    (req, res, next) => {
        const products = adminData.products;
        res.render('shop' , {
            prods : products , 
            docTitle : 'Shop' , 
            path : '/users/shop',
            hasProducts : products.length > 0 ? true : false 
        });
    }
);

module.exports = router;