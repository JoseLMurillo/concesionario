const Cliente = require('../models/cliente');

class ClienteService {
    async obtenerClientes() {
        return await Cliente.findAll();  // Obteniendo todos los vehículos
    }

    async crearCliente(datosCliente) {
        return await Cliente.create(datosCliente);  // Creando un nuevo vehículo
    }

    async obtenerClientePorId(id) {
        return await Cliente.findByPk(id);  // Obteniendo vehículo por su ID
    }

    async eliminarCliente(id) {
        return await Cliente.destroy({ where: { id } });  // Eliminando vehículo por su ID
    }

    async actualizarCliente(id, datosActualizados) {
        const cliente = await Cliente.findByPk(id);

        if(!cliente) {
            return {message: 'Cliente no encontrado'};
        }

        await cliente.update(datosActualizados);

        return await Cliente.findByPk(id);
    }
}

module.exports = new ClienteService();
