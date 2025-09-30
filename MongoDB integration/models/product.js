const {v4: uuid} = require('uuid');
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const Product = sequelize.define(
    'product' , {
        id : {
            type : Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
        },
        title : {
           type : Sequelize.STRING,
           allowNull: false,
        },
        price : {
            type : Sequelize.INTEGER,
            allowNull: false,
        },
        description : {
            type : Sequelize.STRING,
            allowNull: false,
        },
        imageUrl : {
            type : Sequelize.STRING,
            allowNull: false,
        }
    }
)

module.exports = Product;