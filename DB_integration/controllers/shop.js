const Product = require('../models/product');
const Cart = require('../models/cart');
exports.getProducts = (req, res, next) => {
    Product.fetchAll().then(
        ([products , fieldsData]) => {
            res.render('shop/product-list', {
                prods: products,
                pageTitle: 'Shop',
                path: '/products',
                hasProducts: products.length > 0 ? true : false,
                productCSS: true,
                activeShop: true
            });
        }
    ).catch(
        err => console.log(err) 
    );
    
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    Product.getProductById(prodId).then(
        ([product , fieldsData]) => {
            res.render('shop/product-details', {
                product: product[0],
                pageTitle: product.title,
                path: '/products'
            })
        } 
    )

}

exports.postCart = (req, res, next) => {
    const reqBody = req.body;
    Product.getProductById(reqBody.productId,
        product => Cart.addProduct(product.id, product.price));
    res.redirect('/users/cart');
}

exports.getCart = (req, res, next) => {
    const cartProducts = [];
    Cart.getCart(
        cartContent => {
            Product.fetchAll(
                products => {
                    for (let product of products) {
                        cartProductData = cartContent.products.find(p => p.id == product.id);
                        if(cartProductData)
                            cartProducts.push({ productData :  {...product} , qty :  cartProductData.qty }) ;
                    }
                    console.log(cartProducts) ;
                    res.render(
                        'shop/cart',
                        {
                            path: '/cart',
                            pageTitle: 'Your Cart',
                            products: cartProducts,
                            totalPrice: cartContent.totalPrice
                        }
                    )
                }
            );
        }
    );
};

exports.postRemoveProductFromCart = (req , res , next) => {
    Cart.deleteProduct( req.body.id , req.body.price ); 
    res.redirect('/users/');
}


exports.getIndex = (req, res, next) => {
    Product.fetchAll().then(
        ([products , fieldsData]) => {
            res.render('shop/index',
                {
                    prods: products,
                    pageTitle: 'Main Page',
                    path: '/users/shop',
                    hasProducts: products.length > 0 ? true : false,
                    productCSS: true,
                    activeShop: true
                }
            )
        }
    ).catch(
        err => console.log(err)
    )
};

exports.getCheckout = (req, res, next) => {
    res.render(
        'shop/checkout',
        {
            pageTitle: 'Checkout',
            path: '/checkout'
        }
    )
}


exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/users/urders',
        pageTitle: 'Orders'
    });
};

exports.postDeleteProductFromCart = (req, res, next) => {
    const productId = req.params.productId;
    Product.getProductById(productId, product => Cart.deleteProduct(productId, product.price));
    res.redirect('/users/');
}