const Sequelize = require('sequelize');


const sequelize = new Sequelize('heroku_9f504b737ad6a63', 'b566bdf2db1c0c', 'a2d6b11b', {
    host: 'eu-cdbr-west-02.cleardb.net',
    dialect:'mysql' 
});

module.exports = sequelize;