const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Vehiculo = require('./vehiculo');
const Usuario = require('./usuario');
const Cliente = require('./cliente');

const Venta = sequelize.define('Venta', {
    /* marca: {
        type: DataTypes.STRING,
        allowNull: false
    }, */
    fechaVenta: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    tableName: 'Ventas',
    timestamps: false
});

//Una vehiculo tiene una marca
Usuario.hasMany(Venta);
Cliente.hasMany(Venta);
Vehiculo.belongsTo(Venta);
/* Categoria.belongsTo(Vehiculo); */

module.exports = Venta;