# Sistema de Concesionario de Autos

Este es un sistema para la gestión de vehículos en un concesionario de autos, desarrollado con **Node.js**, **Express**, **MySQL** y **React** en el frontend. Incluye funcionalidades para agregar, listar, editar y eliminar vehículos, así como la posibilidad de subir fotos de los vehículos.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express, Sequelize (ORM para MySQL)
- **Base de Datos**: MySQL
- **Frontend**: React con React Router
- **Subida de Imágenes**: Multer
- **ORM**: Sequelize

## Características

- Agregar un vehículo (con foto opcional).
- Listar vehículos.
- Editar un vehículo (incluyendo la actualización de la foto).
- Eliminar un vehículo.
- Manejo de rutas en el frontend con React Router.
  
## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- MySQL (versión 5.7 o superior)
- Git

## Configuración del Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/concesionario-autos.git
cd concesionario-autos
```

### 2. Configurar la Base de Datos

Crea una base de datos MySQL llamada `concesionario` (o el nombre que prefieras) y configura las credenciales en el archivo `.env`.

```sql
CREATE DATABASE concesionario;
```

### 3. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_NAME=concesionario
PORT=3000
```

### 4. Instalación de Dependencias

#### Backend

Navega al directorio `backend/` y ejecuta el siguiente comando para instalar las dependencias:

```bash
cd backend
npm install
```

#### Frontend

Navega al directorio `frontend/` y ejecuta el siguiente comando para instalar las dependencias:

```bash
cd frontend
npm install
```

### 5. Migraciones y Seeders

Configura la base de datos y las tablas usando Sequelize. Ejecuta las migraciones con el siguiente comando:

```bash
npx sequelize-cli db:migrate
```

Si tienes seeders o datos iniciales, puedes ejecutarlos con:

```bash
npx sequelize-cli db:seed:all
```

### 6. Ejecución del Servidor Backend

Para iniciar el servidor backend, navega al directorio `backend/` y ejecuta:

```bash
npm start
```

El servidor backend estará disponible en `http://localhost:3000`.

### 7. Ejecución del Frontend

Para iniciar el servidor frontend, navega al directorio `frontend/` y ejecuta:

```bash
npm start
```

El servidor frontend estará disponible en `http://localhost:3001`.

## API Endpoints

### Rutas del Backend

| Método | Endpoint                | Descripción                     |
|--------|-------------------------|---------------------------------|
| POST   | `/api/vehiculos`         | Crear un nuevo vehículo         |
| GET    | `/api/vehiculos`         | Listar todos los vehículos      |
| GET    | `/api/vehiculos/:id`     | Obtener un vehículo por ID      |
| PUT    | `/api/vehiculos/:id`     | Actualizar un vehículo por ID   |
| DELETE | `/api/vehiculos/:id`     | Eliminar un vehículo por ID     |

### Ejemplo de Petición para Actualizar un Vehículo

```bash
PUT /api/vehiculos/:id
```

Cuerpo de la petición (con `FormData` para subir imágenes):

```json
{
  "marca": "Toyota",
  "modelo": "Corolla",
  "precio": 25000,
  "año": 2021,
  "foto": "archivo de imagen"
}
```

## Subida de Imágenes

Las imágenes se almacenan en la carpeta `uploads/` en el servidor backend. Para subir una imagen, utiliza el campo `foto` en una petición multipart/form-data.

## Frontend

El frontend está desarrollado con **React** y utiliza **React Router** para manejar la navegación entre las diferentes vistas de la aplicación (listar vehículos, agregar, editar).

### Rutas del Frontend

| Ruta                 | Descripción                   |
|----------------------|-------------------------------|
| `/`                  | Página de bienvenida           |
| `/vehiculos`         | Lista de vehículos             |
| `/agregar`           | Formulario para agregar vehículo |
| `/vehiculos/:id/editar` | Formulario para editar vehículo |

## Estructura del Proyecto

```bash
concesionario-autos/
│
├── backend/                   # Directorio del servidor backend
│   ├── controllers/           # Controladores de Express
│   ├── models/                # Modelos Sequelize
│   ├── routes/                # Rutas de la API
│   ├── services/              # Lógica de negocio (Servicios)
│   ├── uploads/               # Carpeta para las fotos subidas
│   ├── config/                # Configuraciones de base de datos
│   └── server.js              # Punto de entrada de Express
│
├── frontend/                  # Directorio del frontend React
│   ├── src/                   # Código fuente de React
│   ├── components/            # Componentes de React
│   └── App.js                 # Configuración de las rutas con React Router
│
└── README.md                  # Archivo de documentación
```

## Contribuir

Las contribuciones son bienvenidas. Por favor, crea un "issue" o envía un "pull request" para cualquier mejora o corrección.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para cualquier propósito.

```

### Instrucciones adicionales

1. Guarda este contenido en un archivo llamado `README.md` en la raíz de tu proyecto.
2. Luego, realiza un commit y un push a tu repositorio de GitHub para que el archivo quede visible en la página principal.

```bash
git add README.md
git commit -m "Añadir archivo README"
git push origin main
```