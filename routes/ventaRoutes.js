const path = require('path');
const express = require('express');
const VentaController = require('../controllers/ventaController');
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

router.get('/ventas', VentaController.obtenerTodos);
router.post('/ventas', VentaController.crear);
router.put('/ventas/:id', VentaController.actualizar);
router.delete('/ventas/:id', VentaController.eliminar);

module.exports = router;

