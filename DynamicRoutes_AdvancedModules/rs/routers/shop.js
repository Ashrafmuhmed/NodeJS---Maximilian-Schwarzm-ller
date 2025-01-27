const express = require('express');
const router = express.Router();
const productsController = require('../controllers/shop');

router.get(
    '/', productsController.getIndex
);

router.get(
    '/cart' , productsController.getCart
);

router.post(
    '/cart' , productsController.postCart
)

router.get(
    '/products' , productsController.getProducts  
);

router.get('/products/:productId' , productsController.getProduct)

router.get(
    '/checkout' , productsController.getCheckout
);

router.get(
    '/orders' , productsController.getOrders
)

module.exports = router;