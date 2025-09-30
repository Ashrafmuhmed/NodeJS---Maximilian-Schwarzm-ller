const sequelize = require('../util/database')
const Sequelize = require('sequelize');

const orderItem = sequelize.define(
    'orderItem',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: Sequelize.INTEGER,
    }
);

module.exports = orderItem;