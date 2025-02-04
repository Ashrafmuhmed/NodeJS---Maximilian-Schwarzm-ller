const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {
    let products = [];
    fs.readFile(
        p, (err, data) => {
            if (!err) {
                products = JSON.parse(data);
                // console.log('From fetching data', products);
                cb(products);
            }
            else {
                console.log(err);
                cb(products);
            }
        }
    )
}

module.exports = class Product {
    constructor(id ,title , price , imageUrl , description ) {
        this.id = id ;
        this.title = title;
        this.price = Number.parseInt(price);
        this.imageUrl = imageUrl ;
        this.description = description ;
    }

    save() {
        getProductsFromFile(products => {
            if(this.id){
                const editedProductIndex = products.findIndex( p => p.id == this.id) ;
                products[editedProductIndex] = this ;
            }else{
                this.id = (products[products.length - 1].id + 1).toString() ;
                products.push(this);}
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }
    
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static getProductById(id , cb){
        getProductsFromFile(
            products => {
                const product = products.find(p => p.id == id);
                cb(product);
            }
        )
    }

    static deleteProduct( id){
        getProductsFromFile(
            products => {
                const updatedProducts = products.filter(p => p.id != id);
                fs.writeFile(p , JSON.stringify(updatedProducts) , err => {
                    if(err){
                        console.log(err);
                    }
                })
            }
        )
    }
};


