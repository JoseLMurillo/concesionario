const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue');
const VehiculoService = require('../services/vehiculoService');
const path = require('path');

class VehiculoController {
    async crear(req, res) {
        /* console.log('Datos recibidos:', req.body);
        console.log('Archivo recibido:', req.file); */

        const {marca, modelo, precio, ano} = req.body;
        /* const foto = req.file ? req.file.path : null; */
        const foto = req.file ? req.file.path.replace('uploads\\', '') : null;

        const nuevoVehiculo = await VehiculoService.crearVehiculo({marca, modelo, precio, ano, foto});
        res.json(nuevoVehiculo);
    }

    async obtenerTodos(req, res) {
        const vehiculos = await VehiculoService.obtenerVehiculos();
        res.json(vehiculos);
    }

    async obtenerPorId(req, res) {
        const vehiculo = await VehiculoService.obtenerVehiculoPorId(req.params.id);
        res.json(vehiculo)
    }

    async eliminar(req, res) {
        await VehiculoService.eliminarVehiculo(req.params.id);
        res.sendStatus(204);
    }

    async actualizar(req, res) {
        const { id } = req.params;
        const { marca, modelo, precio, ano } = req.body;

        console.log('hasta aqui llega', req.body);

        /* const foto = req.file ? req.file.path : null;
        const vehiculoActualizado = await VehiculoService.actualizarVehiculo(id, { marca, modelo, precio, ano, foto });
        res.json(vehiculoActualizado); */
    }
}

module.exports = new VehiculoController();