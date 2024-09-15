const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue');
const ClienteService = require('../services/clienteService');
const path = require('path');

class ClienteController {
    async crear(req, res) {
        /* console.log('Datos recibidos:', req.body);
        console.log('Archivo recibido:', req.file); */

        const {marca, modelo, precio, ano} = req.body;
        /* const foto = req.file ? req.file.path : null; */
        const foto = req.file ? req.file.path.replace('uploads\\', '') : null;

        const nuevoCliente = await ClienteService.crearCliente({nombre, correo, numeroTelefono});
        res.json(nuevoCliente);
    }

    async obtenerTodos(req, res) {
        const clientes = await ClienteService.obtenerClientes();
        res.json(clientes);
    }

    async obtenerPorId(req, res) {
        const cliente = await ClienteService.obtenerClientesPorId(req.params.id);
        res.json(cliente)
    }

    async eliminar(req, res) {
        await ClienteService.eliminarCliente(req.params.id);
        res.sendStatus(204);
    }

    async actualizar(req, res) {
        const {id} = req.params;
        const datosActualizados = req.body;

        const clienteActualizado = await ClienteService.actualizarCliente(id, datosActualizados);

        if(!clienteActualizado) {
            return res.status(404).json({message: 'Cliente no encontrado'});
        }

        res.json(clienteActualizado);
    }
}

module.exports = new ClienteController();