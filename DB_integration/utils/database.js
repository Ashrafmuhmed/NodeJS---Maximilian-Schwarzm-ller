const { Sequelize } =  require('sequelize');

const sequelize = new Sequelize(
    'store', 'root' , 'Hellomysql2' , {dialect : 'mysql' , host : 'localhost' ,port : 3305}
);

module.exports = sequelize ; 