const getDb = require('../util/database').getDb;
const { ObjectId } = require('mongodb');
const { get } = require('../routes/admin');
const Product = require('./product');
class User {

    constructor(username, password, email, cart, id) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.cart = cart;
        this.id = id;
    }
    /*
     const productId = product._id;
            const db = getDb();
    
    
            let newQuantity = 1;
            const updatedCartItems = [...this.cart.items];
            const cartProductIndex = this.cart.items.findIndex(cp => {
                return cp.productId.toString() === productId.toString();
            });
    
            if (cartProductIndex >= 0) {
                newQuantity = this.cart.items[cartProductIndex].quantity + 1;
                updatedCartItems[cartProductIndex].quantity = newQuantity;
            }
            else {
                updatedCartItems.push({ productId: new ObjectId(productId), quantity: newQuantity });
            }
            const updatedCart = { items: updatedCartItems };
            this.cart = updatedCart;
            return db.collection('users').updateOne(
                { _id: new ObjectId(this.id) },
                { $set: { cart: this.cart } }
            );
    */
    addToCart(product) {

        const db = getDb();
        const productId = product._id;

        const updatedCartItems = [...this.cart.items];
        let newQuantity = 1;

        const productIdx = updatedCartItems.findIndex(p => p.productId.toString() === productId.toString());

        if (productIdx >= 0) {
            newQuantity = updatedCartItems[productIdx].quantity + 1;
            updatedCartItems[productIdx].quantity = newQuantity;
        } else {
            updatedCartItems.push({
                productId: productId,
                quantity: newQuantity
            });
        }

        return db.collection('users').updateOne({ _id: this.id }, { $set: { cart: { items: updatedCartItems } } });

    }
    /*
    const db = getDb();

        if (!this.cart || !this.cart.items || this.cart.items.length === 0) {
            return Promise.resolve([]);
        }

        const productIds = this.cart.items.map(item => {
            return new ObjectId(item.productId);
        });

        return db.collection('products')
            .find({ _id: { $in: productIds } })
            .toArray()
            .then(products => {
                return products.map(product => {
                    return {
                        ...product,
                        quantity: this.cart.items.find(
                            item => item.productId.toString() === product._id.toString()
                        ).quantity
                    };
                });
            });
    */
    getCart() {

        const db = getDb();

        const cartItems = this.cart.items;

        if (!cartItems) return Promise.resolve([]);

        const productIds = cartItems.map(item => new ObjectId(item.productId));

        return db.collection('products')
            .find({ _id: { $in: productIds } })
            .toArray()
            .then(
                products => {
                    return products.map(
                        product => {
                            return {
                                ...product,
                                quantity: this.cart.items.find(p => p.productId.toString() === product._id.toString()).quantity
                            }

                        }
                    );
                }
            );
    }

    getOrders() {

        const db = getDb();

        return db.collection('orders')
            .find({ 'user._id': this.id })
            .toArray()


    }

    createOrder() {

        const db = getDb();

        const productsIds = this.cart.items.map(p => p.productId);

        return db.collection('products')
            .find({ _id: { $in: productsIds } })
            .toArray()
            .then(
                products => {
                    return products.map(
                        product => {
                            return {
                                ...product,
                                quantity: this.cart.items.find(p => p.productId.toString() == product._id.toString()).quantity
                            }
                        }
                    )
                }
            ).then(
                items => {
                    const newCart = {
                        order: {
                            items : items
                        },
                        user: {
                            _id: new ObjectId(this.id),
                            username: this.username,
                            email: this.email,
                        }
                    }
                    return db.collection('orders')
                        .insertOne(newCart)
                        .then(
                            res => {
                                this.cart = { items: [] };
                                return db.collection('users')
                                    .updateOne({ _id: this.id }, { $set: { cart: this.cart } })
                            }
                        )
                }
            )

    }

    deleteProductFromCart(productId) {
        const db = getDb();

        const updatedCartItems = this.cart.items.filter(p => p.productId.toString() != productId.toString());

        return db.collection('users').updateOne(
            { _id: this.id },
            {
                $set: {
                    cart: { items: updatedCartItems }
                }
            }
        );

    }

    save() {
        const db = getDb();
        return db.collection('users').insertOne(this);
    }

    static fetchUser(id) {
        const db = getDb();
        return db.collection('users').findOne({ _id: new ObjectId(id) });
    }

}


module.exports = User; 