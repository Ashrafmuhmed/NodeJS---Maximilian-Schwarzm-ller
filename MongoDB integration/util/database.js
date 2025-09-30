const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-schema' , 'root' , '30Ashraf40Bakr',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = sequelize;