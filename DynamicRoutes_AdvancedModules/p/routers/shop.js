const express = require('express');
const router = express.Router();
const productsController = require('../controllers/shop');

router.get(
    '/shop', productsController.getIndex
);

router.get(
    '/cart' , productsController.getCart
);

router.get(
    '/products' , productsController.getShop  
);

router.get(
    '/checkout' , productsController.getCheckout
);

router.get(
    '/orders' , productsController.getOrders
)

module.exports = router;