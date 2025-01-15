const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get(
    '/shop', productsController.getProducts
);

module.exports = router;