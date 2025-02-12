const { Sequelize } =  require('sequelize');

const sequelize = new Sequelize(
    'store', 'root' , 'Hellomysql2' , {dialect : 'nysql' , host : 'localhost'}
);

module.exports = sequelize ; 