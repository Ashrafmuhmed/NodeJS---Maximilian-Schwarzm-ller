const Product = require('../models/product');
const {v4: uuid} = require('uuid');
exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', path: '/admin/add-product', editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user.createProduct({
        id: uuid(),
        title : title,
        imageUrl : imageUrl,
        price : price,
        description : description,
    }).then(
        _ => res.redirect('/')
    ).catch(
        err => console.log(err)
    );
};

exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    req.user.getProducts({where: {id: prodId}}).then(
        products => {
            const product = products[0];
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product', path: '/admin/edit-product', editing: editMode, product: product
            });
        }
    ).catch(
        err => console.log(err)
    )

};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    Product.update(
        {
            title: updatedTitle,
            price: updatedPrice,
            description: updatedDesc,
            imageUrl: updatedImageUrl,
        },{
            where: {
                id: prodId,
            }
        }
    ).then(
        (product) => {
            res.redirect('/admin/products');
        }
    ).catch(error => {
        console.error(error);
    })
};

exports.getProducts = (req, res, next) => {
    req.user.getProducts()
        .then(products => {
            res.render('admin/products', {
                prods: products, pageTitle: 'Admin Products', path: '/admin/products'
            });
        }).catch(
            err => console.log(err)
    );
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.destroy(
        {
            where:{
                id: prodId
            }
        }
    );
    res.redirect('/admin/products');
};
