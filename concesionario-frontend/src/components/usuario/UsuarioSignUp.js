import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/* Login - sing in */

function CrearUsuario() {
    const { id } = useParams(); // Obtiene el id del vehículo desde la URL
    const navigate = useNavigate(); // Hook para redirigir después de la actualización

    //OBJETO GLOBAL
    const [usuario, setUsuario] = useState({
        nombre: '',
        correo: '',
        numeroTelefono: ''
    });

    //LLAMADA A LA API
    /* useEffect(() => {
        // Fetch el vehículo actual
        fetch(`http://localhost:3000/api/vehiculos/${id}`)
            .then(response => response.json())
            .then(data => setVehiculo(data))
            .catch(err => console.error('Error al obtener el vehículo:', err));
    }, [id]); */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nombre', usuario.nombre);
        formData.append('correo', usuario.correo);
        formData.append('numeroTelefono', usuario.numeroTelefono);
        formData.append('rol', usuario.rol);

        // Enviar datos al backend
        try {
            await fetch(`http://localhost:3000/api/usuarios/${id}`, {
                method: 'PUT',
                body: formData
            });
            navigate('/usuarios'); // Redirigir después de la actualización
        } catch (err) {
            console.error('Error al crear el usuario:', err);
        }
    };

    return (
        <div>
            <h1>Registrarse</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                    <input type="text" className="form-control"
                        name="nombre"
                        value={usuario.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='input-group mb-3'>
                    <span className="input-group-text" id="inputGroup-sizing-default">Correo Electronico</span>
                    <input
                        type="text" className="form-control"
                        name="correo"
                        value={usuario.correo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Número de Teléfono</span>
                    <input
                        type="text" className="form-control"
                        name="numeroTelefono"
                        value={usuario.numeroTelefono}
                        onChange={handleChange}
                        required
                    />

                </div>

                <button className='btn btn-primary' type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default CrearUsuario;
