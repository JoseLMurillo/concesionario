const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue');
const UsuarioService = require('../services/usuarioService');
const path = require('path');

class UsuarioController {
    async crear(req, res) {
        /* console.log('Datos recibidos:', req.body);
        console.log('Archivo recibido:', req.file); */

        const {marca, modelo, precio, ano} = req.body;
        /* const foto = req.file ? req.file.path : null; */
        const foto = req.file ? req.file.path.replace('uploads\\', '') : null;

        const nuevoUsuario = await UsuarioService.crearUsuario({nombre, correo, numeroTelefono, rol});
        res.json(nuevoUsuario);
    }

    async obtenerTodos(req, res) {
        const usuarios = await UsuarioService.obtenerUsuarios();
        res.json(usuarios);
    }

    async obtenerPorId(req, res) {
        const usuario = await UsuarioService.obtenerUsuariosPorId(req.params.id);
        res.json(usuario)
    }

    async eliminar(req, res) {
        await UsuarioService.eliminarUsuario(req.params.id);
        res.sendStatus(204);
    }

    async actualizar(req, res) {
        const {id} = req.params;
        const datosActualizados = req.body;

        const usuarioActualizado = await UsuarioService.actualizarUsuario(id, datosActualizados);

        if(!usuarioActualizado) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }

        res.json(usuarioActualizado);
    }
}

module.exports = new UsuarioController();