const Rol = require('../models/rol');

class RolService {
    async obtenerRoles() {
        return await Rol.findAll();  // Obteniendo todos los vehículos
    }

    async crearRol(datosRol) {
        return await Rol.create(datosRol);
    }

    async eliminarRol(id) {
        return await Rol.destroy({
            where: {id}});
    }

    async actualizarRol(id, datosActualizados) {
        const rol = await Rol.findByPk(id);

        if(!rol) {
            return {message: 'Rol no encontrado'};
        }

        await rol.update(datosActualizados);

        return await Rol.findByPk(id);
    }

    async actualizarRol(id, datosActualizados) {
        const rol = await Rol.findByPk(id);

        if(!rol) {
            return {message: 'Rol no encontrado'};
        }

        await rol.update(datosActualizados);

        return await Rol.findByPk(id);
    }
}

module.exports = new RolService();
