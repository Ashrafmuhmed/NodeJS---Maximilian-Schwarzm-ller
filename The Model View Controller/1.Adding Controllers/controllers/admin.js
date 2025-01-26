const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formCSS: true,
            activeAddProduct: true
        });
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body.title);
    let reqBody = req.body;
    const product = new Product(reqBody.title, reqBody.price, reqBody.imageUrl, reqBody.description);
    console.log('asdsadsd' , product) ;
    product.save();
    res.redirect('/users/shop');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products',
            {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products',
                hasProducts: products.length > 0 ? true : false,
                productCSS: true,
                activeShop: true
            }
        )
    })
}