const express = require('express');
const cors = require('cors');
const path = require('path');

const sequelize = require('./config/database');

const vehiculoRoutes = require('./routes/vehiculoRoutes');  // Importar las rutas
const modelCategoria = require('./models/categoria');
const modelCliente = require('./models/cliente');
const modelMarca = require('./models/marca')
const modelRol = require('./models/rol')
const modelUsuario = require('./models/usuario')
const modelVehiculo = require('./models/vehiculo')
const modelVenta = require('./models/venta')

const app = express();
const port = 3000;

// Middlewares
app.use(cors());  // Permitir las peticiones desde el frontend
app.use(express.json());  // Middleware para manejar JSON
app.use(express.urlencoded({ extended: true }));  // Para formularios

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/api', vehiculoRoutes);  // Montar las rutas en /api

// Autenticación de la base de datos
sequelize.authenticate()
    .then(() => console.log('Conectado a la base de datos.'))
    .catch(err => console.error('Error al conectar:', err));

// Sincronización de Sequelize
sequelize.sync({ force: false })  // Crea tablas automáticamente, forzando si es necesario
    .then(() => console.log('Tablas creadas/sincronizadas automáticamente'))
    .catch(err => console.log('Error al sincronizar las tablas:', err));

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});