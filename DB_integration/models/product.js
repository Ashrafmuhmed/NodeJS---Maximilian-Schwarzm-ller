const database = require('../utils/database');


module.exports = class Product {
    constructor(id ,title , price , imageUrl , description ) {
        this.id = id ;
        this.title = title;
        this.price = Number.parseInt(price);
        this.imageUrl = imageUrl ;
        this.description = description ;
    }

    save() {
        return database.execute(
            "INSERT INTO products (title , price , description , imageUrl) VALUE ( ? , ? , ? , ? )",
            [this.title , this.price , this.description , this.imageUrl]
        )
    }
    
    static fetchAll() {
        return database.execute('SELECT * FROM products');
    }

    static getProductById(id){
        return database.execute(`SELECT * FROM products WHERE id = ${id}`)
    }

    static deleteProduct( id){
        
    }
};


