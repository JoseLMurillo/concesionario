const Marca = require('../models/marca');

class MarcaService {
    async obtenerMarcas() {
        return await Marca.findAll();  // Obteniendo todos los vehículos
    }

    async crearMarca(datosMarca) {
        return await Marca.create(datosMarca);
    }

    async eliminarMarca(id) {
        return await Marca.destroy({
            where: {id}});
    }

    async actualizarMarca(id, datosActualizados) {
        const marca = await Marca.findByPk(id);

        if(!marca) {
            return {message: 'Marca no encontrada'};
        }

        await marca.update(datosActualizados);

        return await Marca.findByPk(id);
    }

}

module.exports = new MarcaService();
