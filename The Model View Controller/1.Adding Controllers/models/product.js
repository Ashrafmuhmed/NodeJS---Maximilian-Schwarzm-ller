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
                console.log('From fetching data', products);
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
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }
    
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};

