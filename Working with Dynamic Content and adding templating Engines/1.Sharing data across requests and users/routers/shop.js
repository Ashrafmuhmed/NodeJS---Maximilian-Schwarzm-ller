const express = require('express');
const rootDir = require('../utils/path')
const router = express.Router();
const path = require('path');
const adminData = require('./admin');
router.get(
    '/shop',
    (req, res, next) => {
        console.log(adminData.products);
        res.sendFile(path.join(
            rootDir, 'views', 'shop.html'
        ));
    }
);

module.exports = router;