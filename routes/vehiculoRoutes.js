const path = require('path');
const express = require('express');
const VehiculoController = require('../controllers/vehiculoController');
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

router.get('/vehiculos', upload.single('foto'), VehiculoController.obtenerTodos);
router.post('/vehiculos', upload.single('foto'), VehiculoController.crear);
router.get('/vehiculos/:id', VehiculoController.obtenerPorId);
router.put('/vehiculos/:id', upload.single('foto'), VehiculoController.actualizar);
router.delete('/vehiculos/:id', VehiculoController.eliminar);

module.exports = router;

