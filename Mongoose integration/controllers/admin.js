const Product = require('../models/product');
const { v4: uuid } = require('uuid');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', path: '/admin/add-product', editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    req.body.userId = req.user.id ; 
    const product = new Product(req.body);
    product.save();
    res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;

    Product.fetchProduct(prodId).then(product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product 
        });
    }).catch(
        err => console.log(err)
    )

};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.updateProduct(req.body, prodId).then(
        resl => res.status(200).redirect('/admin/products')
    ).catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {

    Product.fetchAll().then(
        products => {
            res.render('admin/products', {
                prods: products, pageTitle: 'Admin Products', path: '/admin/products'
            });
        }
    ).catch(err => console.log(err));

};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.destroyProduct(prodId).then(
        ress => {
            res.redirect('/admin/products');
        }
    ).catch(
        err => console.log(err)
    )
};
