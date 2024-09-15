const MarcaService = require('../services/marcaService');
const path = require('path');

class marcaController {
    async crear(req, res){
        const {nombre} = req.body;

        const nuevaMarca = await MarcaService.crear({nombre});
        res.json(nuevaMarca);
    }

    async obtenerTodos(req, res) {
        const marcas = await MarcaService.obtenerTodos();
        res.json(marcas);
    }
    
    async eliminar(req, res) {
        await MarcaService.eliminar(req.params.id);
        res.sendStatus(204);
    }

    async actualizar(req, res) {
        const {id} = req.params;
        const datosActualizados = req.body;

        const marcaActualizado = await MarcaService.actualizarMarca(id, datosActualizados);

        if(!marcaActualizado) {
            return res.status(404).json({message: 'Marca no encontrado'});
        }

        res.json(marcaActualizado);
    }
}