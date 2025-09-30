const Product = require('../models/product');
const Cart = require('../models/cart');
const {v4: uuid} = require('uuid')

exports.getProducts = (req, res, next) => {
    Product.findAll().then((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    }).catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findByPk(prodId).then(
        (product) => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.title,
                path: '/products'
            });
        }
    ).catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
    Product.findAll().then((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    }).catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
    req.user.cart.getProducts().then((products) => {
        res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products,
        });
    }).catch(err => console.log(err));
    // console.log( req.user.cart ) ;
};

exports.postCart = (req, res, next) => {

    const prodId = req.body.productId;
    let newQuantity = 1;
    req.user.cart.getProducts({where: {id: prodId}})

        .then(
            (product) => {
                if (product.length > 0) {
                    product = product[0];
                    newQuantity = product.cartItem.quantity + 1;
                    return product;
                } else {
                    return Product.findByPk(prodId);
                }
            }
        )

        .then(
            product => req.user.cart.addProduct(product, {
                through: {
                    quantity: newQuantity,
                    id: ((product.cartItem) ? product.cartItem.id : uuid())
                }
            })
        )

        .then(
            _ => {
                res.redirect('/cart');
            }
        )

        .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user.cart.getProducts({where: {id: prodId}})
        .then(
            products => {
                const product = products[0];
                return product.cartItem.destroy();
            }
        )
        .then(
            _ => res.redirect('/cart')
        ).catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
    let products;
    req.user.cart.getProducts()
        .then(
            products => {
                req.user.createOrder({id: uuid()})
                    .then(
                        order => {
                            return order.addProducts(
                                products.map(
                                    product => {
                                        product.orderItem = {quantity: product.cartItem.quantity};
                                        return product;
                                    }
                                )
                            ).catch(err => console.log(err));
                        }
                    );
            }
        )
        .then(
            _ => req.user.cart.setProducts(null)
        )
        .then(
            _ => res.status(200).redirect('/orders')
        )
        .catch(err => console.log(err));
};


exports.getOrders = (req, res, next) => {
    let fetchedOrders;
    req.user.getOrders( { include: ['products'] } )
        .then(
            orders => {
                res.render('shop/orders', {
                    orders: orders,
                    pageTitle: 'Orders',
                    path: '/orders'
                })
            }
        )
        .catch(err => console.log(err));
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
