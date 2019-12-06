const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        });

module.exports = User;