const Venta = require('../models/venta');

class VentaService {
    async obtenerVentas() {
        return await Venta.findAll();  // Obteniendo todos los vehículos
    }

    async crearVenta(datosVenta) {
        return await Venta.create(datosVenta);  // Creando un nuevo vehículo
    }

    async obtenerVentaPorId(id) {
        return await Venta.findByPk(id);  // Obteniendo vehículo por su ID
    }

    async eliminarVenta(id) {
        return await Venta.destroy({ where: { id } });  // Eliminando vehículo por su ID
    }

    async actualizarVenta(id, datosActualizados) {
        const venta = await Venta.findByPk(id);

        if(!venta) {
            return {message: 'Venta no encontrado'};
        }

        await venta.update(datosActualizados);

        return await Venta.findByPk(id);
    }
}

module.exports = new VentaService();
