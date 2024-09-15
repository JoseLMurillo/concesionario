const Vehiculo = require('../models/vehiculo');

class VehiculoService {
    async obtenerVehiculos() {
        return await Vehiculo.findAll();  // Obteniendo todos los vehículos
    }

    async crearVehiculo(datosVehiculo) {
        return await Vehiculo.create(datosVehiculo);  // Creando un nuevo vehículo
    }

    async obtenerVehiculoPorId(id) {
        return await Vehiculo.findByPk(id);  // Obteniendo vehículo por su ID
    }

    async eliminarVehiculo(id) {
        return await Vehiculo.destroy({ where: { id } });  // Eliminando vehículo por su ID
    }

    async actualizarVehiculo(id, data) {
        const vehiculo = await Vehiculo.findByPk(id);
        if (!vehiculo) throw new Error('Vehículo no encontrado');
        return await vehiculo.update(data);
    }
}

module.exports = new VehiculoService();
