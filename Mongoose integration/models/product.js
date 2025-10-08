const getDb = require('../util/database').getDb;
const { ObjectId } = require('mongodb');

class Product {
    constructor(data) {
        this.title = data.title;
        this.imageUrl = data.imageUrl;
        this.description = data.description;
        this.price = data.price;
        this.userId = data.userId ; 
    }

    save() {
        const db = getDb();
        return db.collection('products').insertOne(this);
    }

    static fetchAll() {
        const db = getDb();
        return db.collection('products').find({}).toArray();
    }

    static fetchProduct(id) {
        const db = getDb();
        return db.collection('products').findOne({ _id: new ObjectId(id) });
    }

    static destroyProduct(id) {
        const db = getDb();
        return db.collection('products').deleteOne({ _id: new ObjectId(id) });
    }

    static updateProduct(data, id) {
        const db = getDb();
        return db.collection('products').updateOne({
            _id: new ObjectId(id)
        }, {
            $set: {
                title: data.title,
                price: data.price,
                description: data.description,
                imageUrl: data.imageUrl,
            }
        }) ; 
    }

}

module.exports = Product;