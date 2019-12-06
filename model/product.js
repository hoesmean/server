const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const Product= sequelize.define('Product', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        desc: Sequelize.STRING,
        
        });

module.exports = Product;