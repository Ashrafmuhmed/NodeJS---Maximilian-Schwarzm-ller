const express = require('express');

const router = express.Router() ;

router.get(
    '/add-product' ,
    (req , res , next) => {
        console.log('NEW PRODUCT IS BEING ADDED');
        res.send('<form action = "/products" method = "POST"><input type = "text" name = "product_name" required><button type = "submit">SUBMIT</button></form>');
    }
)

router.post(
    '/products' ,
    (req , res , next) => {
        console.log('NEW PRODUCT IS ADDED ' + req.body ) ;
        res.redirect('/');
    }
)

module.exports = router ;
