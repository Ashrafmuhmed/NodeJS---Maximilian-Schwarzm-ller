const { ObjectId } = require('mongodb');
const Product = require('../models/product');
const { v4: uuid } = require('uuid')

exports.getProducts = (req, res, next) => {
    Product.fetchAll().then(
        products => res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        })
    ).catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.fetchProduct(prodId).then(
        product => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.title,
                path: '/products'
            });
        }
    ).catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll().then(
        products => {
            res.render('shop/index', {
                prods: products,
                pageTitle: 'Shop',
                path: '/'
            });
        }
    ).catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
    req.user.getCart()
        .then(products => {
            // console.log('Cart Products:', products);
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: products
            });
        })
        .catch(err => {
            console.log('Error fetching cart:', err);
            res.redirect('/');
        });
};

exports.postCart = (req, res, next) => {

    const prodId = req.body.productId;
    Product.fetchProduct(prodId).then(
        product => {
            req.user.addToCart(product).then(
                res => console.log(res)
            )
        }
    ).then(
        _ => res.redirect('/cart')
    );

};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user.deleteProductFromCart( new ObjectId(prodId) ).then(
        _ => res.redirect('/cart')
    ).catch( err => console.log( err ) ) ; 
};

exports.postOrder = (req, res, next) => {
    req.user.createOrder().then(
        _ => res.redirect('/cart') 
    )
};


exports.getOrders = (req, res, next) => {
    req.user
        .getOrders()
        .then(
            order => {
                res.render('shop/orders', {
                    orders: order,
                    pageTitle: 'Orders',
                    path: '/orders'
                })
            }
        )
        .catch(err => console.log(err));
};

// exports.getCheckout = (req, res, next) => {
//     res.render('shop/checkout', {
//         path: '/checkout',
//         pageTitle: 'Checkout'
//     });
// };
