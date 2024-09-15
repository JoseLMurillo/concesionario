const CategoriaService = require('../services/marcaService');
const path = require('path');

class categoriaController {
    async crear(req, res){
        const {nombre} = req.body;

        const nuevaCategoria = await CategoriaService.crear({nombre});
        res.json(nuevaCategoria);
    }

    async obtenerTodos(req, res) {
        const categorias = await CategoriaService.obtenerTodos();
        res.json(categorias);
    }
    
    async eliminar(req, res) {
        await CategoriaService.eliminar(req.params.id);
        res.sendStatus(204);
    }

    async actualizar(req, res) {
        const {id} = req.params;
        const datosActualizados = req.body;

        const categoriaActualizado = await CategoriaService.actualizarCategoria(id, datosActualizados);

        if(!categoriaActualizado) {
            return res.status(404).json({message: 'Categoria no encontrado'});
        }

        res.json(categoriaActualizado);
    }
}

module.exports = new categoriaController();