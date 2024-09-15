const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Rol = require('./rol');

const Usuario = sequelize.define('Usuario', {
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
    tableName: 'Usuarios',
    timestamps: false
});

//Una vehiculo tiene una marca
Rol.hasMany(Usuario);
/* Categoria.belongsTo(Vehiculo); */

module.exports = Usuario;