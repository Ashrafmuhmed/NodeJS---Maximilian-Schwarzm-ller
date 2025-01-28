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
    constructor(title , price , imageUrl , description ) {
        this.title = title;
        this.price = Number.parseInt(price);
        this.imageUrl = imageUrl ;
        this.description = description ;
    }

    save() {
        getProductsFromFile(products => {
            this.id = (products.length + 1).toString() ;
            products.push(this);
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
};

