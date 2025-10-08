const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db ; 

const URL = 'mongodb+srv://ashroof:30Ashraf40Bakr@cluster0.zcqm1cp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

exports.mongoConnect = (cb) =>{
    MongoClient.connect(URL).then(
        connection => {
            console.log( "Connected ") ; 
            _db = connection.db('Shop') ; 
            cb();
        }
    ).catch(
        err => console.log(err)
    );
}

exports.getDb = () => _db ; 