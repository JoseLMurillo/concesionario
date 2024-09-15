const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('concensionario', 'root', '4444', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = sequelize;