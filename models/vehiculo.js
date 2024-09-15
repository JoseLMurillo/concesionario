const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Marca = require('./marca');

const Vehiculo = sequelize.define('Vehiculo', {
    modelo: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowrNull: false
    },
    ano: {
        type: DataTypes.DATE,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Vehiculos',
    timestamps: false
});

//Una vehiculo tiene una marca
Marca.hasMany(Vehiculo);
/* Categoria.belongsTo(Vehiculo); */

module.exports = Vehiculo;