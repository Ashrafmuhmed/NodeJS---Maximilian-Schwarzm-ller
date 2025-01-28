const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const Product = require('./product');

const p =  path.join( rootDir , 'data' , 'cart.json') ;

module.exports = class Cart {
    static addProduct(id , productPrice){
        //fetch the previous cart items 
        fs.readFile(
            p , (err , data) => {
                let cart = {
                    products : [] ,
                    totalPrice : 0  
                };
                if(!err)
                {
                    cart = JSON.parse(data) ;
                }
                const existingProductIndex = cart.products.findIndex(p => p.id == id);
                const existingProduct = cart.products[existingProductIndex] ;
                let updatedProduct ;
                if(existingProductIndex != -1)
                {
                    updatedProduct = {...cart.products[existingProductIndex]} ; 
                    updatedProduct.qty += 1 ;
                    cart.products[existingProductIndex] = updatedProduct ; 
                    cart.products = [... cart.products]
                }
                else{
                    updatedProduct = {
                        id : id , qty : 10
                    }
                    cart.products = [...cart.products , updatedProduct] ; 
                }
                cart.totalPrice = cart.totalPrice + productPrice ;
                fs.writeFile( p , JSON.stringify(cart) , err => console.log(err)) ;
            }
        )
    }
}