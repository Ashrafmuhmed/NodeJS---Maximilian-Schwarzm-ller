const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get(
    '/shop', productsController.getShop
);

router.get(
    '/cart' , productsController.getCart
);

router.get(
    '/products' , productsController.getProducts
    
)

router

module.exports = router;