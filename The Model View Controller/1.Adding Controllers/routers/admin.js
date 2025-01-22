const express = require('express');
const path = require('path');
const router = express.Router() ;
const productsController = require('../controllers/products') ;


router.get(
    '/add-product', productsController.getAddProduct
);

router.post(
    '/add-product' , productsController.postAddProduct
)

router.get(
    '/products' , (req , res , next) => {
        res.render(
            'admin/products' , 
            {
                pageTitle : 'Admin Access' ,
                path : '/admin/products'
            }
        )
    }
)

module.exports = {
    routers : router ,    
}
