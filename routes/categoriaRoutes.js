const path = require('path');
const express = require('express');
const CategoriaController = require('../controllers/categoriaController');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

const upload = multer({ storage: storage });

router.get('/categorias', CategoriaController.obtenerTodos);
router.post('/categorias', CategoriaController.crear);
router.put('/categorias/:id', CategoriaController.actualizar);
router.delete('/categorias/:id', CategoriaController.eliminar);

module.exports = router;

