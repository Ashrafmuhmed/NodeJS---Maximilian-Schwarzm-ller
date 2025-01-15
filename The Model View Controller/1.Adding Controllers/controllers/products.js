const Product = require('../models/product');

exports.getAddProduct = (req , res , next) => {
    res.render('add-product' ,
        { 
            pageTitle : 'Add Product' ,
            path: '/admin/add-product',
            formCSS : true,
            activeAddProduct : true});
}

exports.postAddProduct = (req ,res, next) => {
    console.log(req.body.title);
    let productTitle = req.body.title ;
    const product = new Product(productTitle) ;
    product.save();
    res.redirect('/users/shop');
};

exports.getProducts = (req, res, next) => {
        const products = Product.fetchAll() ;
        res.render('shop' , {
        prods : products , 
        pageTitle : 'Shop' , 
        path : '/users/shop',
        hasProducts : products.length > 0 ? true : false ,
        productCSS : true , 
        activeShop : true
    });
}