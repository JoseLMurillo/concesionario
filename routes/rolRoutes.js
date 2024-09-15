const path = require('path');
const express = require('express');
const RolController = require('../controllers/rolController');
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

router.get('/roles', RolController.obtenerTodos);
router.post('/roles', RolController.crear);
router.put('/roles/:id', RolController.actualizar);
router.delete('/roles/:id', RolController.eliminar);

module.exports = router;

