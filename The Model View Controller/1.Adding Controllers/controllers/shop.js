const Product = require('../models/product');

exports.getShop = (req, res, next) => {
        Product.fetchAll(products => {
            res.render('shop/product-list' , {
            prods : products , 
            pageTitle : 'Shop' , 
            path : '/products',
            hasProducts : products.length > 0 ? true : false ,
            productCSS : true , 
            activeShop : true
        });
        }); 
}

exports.getCart = (req , res , next) => {
    res.render(
        'shop/cart' , 
        {
            path : '/cart',
            pageTitle : 'Your Cart'
        }
    )
};


exports.getIndex = (req , res , next) => {
    Product.fetchAll( products => {
        res.render( 'shop/index' , 
            {
                prods : products , 
            pageTitle : 'Main Page' , 
            path : '/users/index',
            hasProducts : products.length > 0 ? true : false ,
            productCSS : true , 
            activeShop : true
            }
        )
    })
};

exports.getCheckout = (req , res , next) => {
    res.render(
        'shop/checkout' , 
        {
            pageTitle : 'Checkout' , 
            path : '/checkout'
        }
    )
}