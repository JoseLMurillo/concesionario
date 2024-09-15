const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue');
const VentaService = require('../services/ventaService');
const path = require('path');

class VentaController {
    async crear(req, res) {
        /* console.log('Datos recibidos:', req.body);
        console.log('Archivo recibido:', req.file); */

        const {marca, modelo, precio, ano} = req.body;
        /* const foto = req.file ? req.file.path : null; */
        const foto = req.file ? req.file.path.replace('uploads\\', '') : null;

        const nuevoVenta = await VentaService.crearVenta({fechaVenta, usuario, cliente, vehiculo});
        res.json(nuevoVenta);
    }

    async obtenerTodos(req, res) {
        const ventas = await VentaService.obtenerVentas();
        res.json(ventas);
    }

    async obtenerPorId(req, res) {
        const venta = await VentaService.obtenerVentasPorId(req.params.id);
        res.json(venta)
    }

    async eliminar(req, res) {
        await VentaService.eliminarVenta(req.params.id);
        res.sendStatus(204);
    }

    async actualizar(req, res) {
        const {id} = req.params;
        const datosActualizados = req.body;
        console.log(datosActualizados);

        const ventaActualizado = await VentaService.actualizarVenta(id, datosActualizados);

        if(!ventaActualizado) {
            return res.status(404).json({message: 'Venta no encontrado'});
        }

        res.json(ventaActualizado);
    }
}

module.exports = new VentaController();