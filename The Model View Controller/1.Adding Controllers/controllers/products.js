const products = [] ;

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
    products.push({'productTitle' : productTitle});
    res.redirect('/users/shop');
};

exports.getProducts = (req, res, next) => {
        res.render('shop' , {
        prods : products , 
        pageTitle : 'Shop' , 
        path : '/users/shop',
        hasProducts : products.length > 0 ? true : false ,
        productCSS : true , 
        activeShop : true
    });
}