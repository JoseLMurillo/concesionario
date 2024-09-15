const path = require('path');
const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
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

router.get('/usuarios', UsuarioController.obtenerTodos);
router.post('/usuarios', UsuarioController.crear);
router.put('/usuarios/:id', UsuarioController.actualizar);
router.delete('/usuarios/:id', UsuarioController.eliminar);

module.exports = router;

