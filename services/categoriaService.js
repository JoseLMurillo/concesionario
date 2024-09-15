const Categoria = require('../models/categoria');

class CategoriaService {
    async obtenerCategorias() {
        return await Categoria.findAll();  // Obteniendo todos los vehículos
    }

    async crearCategoria(datosCategoria) {
        return await Categoria.create(datosCategoria);
    }

    async eliminarCategoria(id) {
        return await Categoria.destroy({
            where: {id}});
    }

    async actualizarCategoria(id, datosActualizados) {
        const categoria = await Categoria.findByPk(id);

        if(!categoria) {
            return {message: 'Categoria no encontrada'};
        }

        await categoria.update(datosActualizados);

        return await Categoria.findByPk(id);
    }

    /* 

    async crearVehiculo(datosVehiculo) {
        return await Vehiculo.create(datosVehiculo);  // Creando un nuevo vehículo
    }

    async obtenerVehiculoPorId(id) {
        return await Vehiculo.findByPk(id);  // Obteniendo vehículo por su ID
    }

    async eliminarVehiculo(id) {
        return await Vehiculo.destroy({ where: { id } });  // Eliminando vehículo por su ID
    } */
}

module.exports = new MarcaService();
