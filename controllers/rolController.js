const RolService = require('../services/rolService');
const path = require('path');

class rolController {
    async crear(req, res){
        const {nombre} = req.body;

        const nuevaRol = await RolService.crear({nombre});
        res.json(nuevaRol);
    }

    async obtenerTodos(req, res) {
        const roles = await RolService.obtenerTodos();
        res.json(roles);
    }
    
    async eliminar(req, res) {
        await RolService.eliminar(req.params.id);
        res.sendStatus(204);
    }

    async actualizar(req, res) {
        const {id} = req.params;
        const datosActualizados = req.body;

        const rolActualizado = await RolService.actualizarRol(id, datosActualizados);

        if(!rolActualizado) {
            return res.status(404).json({message: 'Rol no encontrado'});
        }

        res.json(rolActualizado);
    }
}

module.exports = new rolController;