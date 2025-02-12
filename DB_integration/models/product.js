const {Sequelize , DataTypes} = require('sequelize') ; 

const sequelize = require('../utils/database') ;

const Product = sequelize.define(
    'product' , 
    {
        id : {
            type : DataTypes.INTEGER , 
            allowNull : false ,
            autoIncrement : true ,
            primaryKey : true 
        },
        title : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        description : {
            type : DataTypes.STRING ,
            allowNull : false 
        },
        price : {
            type : DataTypes.INTEGER , 
            allowNull : false 
        },
        imageUrl : {
            type :DataTypes.STRING,
            allowNull : false
        }
    }
);

module.exports = Product ; 