const express = require('express');
const path = require('path');
const router = express.Router() ;
const adminController = require('../controllers/admin');


router.get(
    '/add-product', adminController.getAddProduct
);

router.post(
    '/add-product' , adminController.postAddProduct
)

router.get(
    '/products' , adminController.getProducts
)

router.get(
    '/edit-product/:productId' , adminController.getEditProduct
)

router.post(
    '/edit-product' , adminController.postEditProduct
)

router.post(
    '/delete-product/:productId' , adminController.postDeleteproduct
)

module.exports = {
    routers : router ,    
}
