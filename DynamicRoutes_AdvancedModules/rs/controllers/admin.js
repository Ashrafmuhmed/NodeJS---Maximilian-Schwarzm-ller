const Product = require('../models/product');
const cart = require('../models/cart');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
        });
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body.title);
    let reqBody = req.body;
    const product = new Product( null , reqBody.title, reqBody.price, reqBody.imageUrl, reqBody.description);
    console.log('asdsadsd', product);
    product.save();
    res.redirect('/users/shop');
};


exports.getEditProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.getProductById(productId,
        product => {
            if(!product) res.redirect('/users')
            res.render('admin/edit-product',
                {
                    pageTitle: 'Edit Product',
                    path: '/admin/add-product',
                    product: product
                });
        }
    );
}

exports.postEditProduct = (req , res , next) => {
    const reqBody = req.body ;
    const editedProduct = new Product( reqBody.id , reqBody.title , reqBody.price , reqBody.imageUrl , reqBody.description) ;
    console.log(editedProduct) ;
    editedProduct.save();
    res.redirect('/users');
}


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

exports.postDeleteproduct = (req, res , next) => {
    const productId = req.params.productId ;
    Product.deleteProduct(productId);
    Product.getProductById( productId  , product => cart.deleteProduct(productId , product.price));
    res.redirect('/users');
}