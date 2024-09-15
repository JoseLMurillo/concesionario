const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    /* marca: {
        type: DataTypes.STRING,
        allowNull: false
    }, */
    nombre: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    correo: {
        type: DataTypes.CHAR,
        allowrNull: false
    },
    numeroTelefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {
    tableName: 'Clientes',
    timestamps: false
});

module.exports = Cliente;