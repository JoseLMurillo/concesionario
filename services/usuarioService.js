const Usuario = require('../models/usuario');

class UsuarioService {
    async obtenerUsuarios() {
        return await Usuario.findAll();  // Obteniendo todos los vehículos
    }

    async crearUsuario(datosUsuario) {
        return await Usuario.create(datosUsuario);  // Creando un nuevo vehículo
    }

    async obtenerUsuarioPorId(id) {
        return await Usuario.findByPk(id);  // Obteniendo vehículo por su ID
    }

    async eliminarUsuario(id) {
        return await Usuario.destroy({ where: { id } });  // Eliminando vehículo por su ID
    }

    async actualizarUsuario(id, datosActualizados) {
        const usuario = await Usuario.findByPk(id);

        if(!usuario) {
            return {message: 'Usuario no encontrado'};
        }

        await usuario.update(datosActualizados);

        return await Usuario.findByPk(id);
    }
}

module.exports = new UsuarioService();
