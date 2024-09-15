const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Rol = sequelize.define('Rol',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Rol',
        timestamps: false
    });

module.exports = Rol;