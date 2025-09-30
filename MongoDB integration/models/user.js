const Sequelize = require('sequelize');

const sequelize = require('../util/database') ;

const User = sequelize.define('User', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            isEmail: {
                msg: 'Email is required',
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = User;