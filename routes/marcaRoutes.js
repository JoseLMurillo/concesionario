const path = require('path');
const express = require('express');
const MarcaController = require('../controllers/marcaController');
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

router.get('/marcas', MarcaController.obtenerTodos);
router.post('/marcas', MarcaController.crear);
router.put('/marcas/:id', MarcaController.actualizar);
router.delete('/marcas/:id', MarcaController.eliminar);

module.exports = router;

