import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/* Login - sing in */

function UsuarioLogin() {
    const { id } = useParams(); // Obtiene el id del vehículo desde la URL
    const navigate = useNavigate(); // Hook para redirigir después de la actualización

    //OBJETO GLOBAL
    const [usuario, setUsuario] = useState({
        nombre: '',
        correo: '',
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

        // Enviar datos al backend
        try {
            await fetch(`http://localhost:3000/api/usuarios/${id}`, {
                method: 'PUT',
                body: formData
            });
            navigate('/usuarios'); // Redirigir después de la actualización
        } catch (err) {
            console.error('El usuario no existe:', err);
        }
    };

    return (
        <div>
            <h1>Inicia Sesión</h1>

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

                <button className='btn btn-primary' type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default UsuarioLogin;
