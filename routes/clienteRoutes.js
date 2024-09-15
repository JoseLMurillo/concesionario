const path = require('path');
const express = require('express');
const ClienteController = require('../controllers/clienteController');
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

router.get('/clientes', ClienteController.obtenerTodos);
router.post('/clientes', ClienteController.crear);
router.put('/clientes/:id', ClienteController.actualizar);
router.delete('/clientes/:id', ClienteController.eliminar);

module.exports = router;

