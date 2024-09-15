import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarVehiculo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vehiculo, setVehiculo] = useState({});
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState('');
    const [ano, setAno] = useState('');
    const [foto, setFoto] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/vehiculos/${id}`)
            .then(response => response.json())
            .then(data => {
                setVehiculo(data);
                setMarca(data.marca);
                setModelo(data.modelo);
                setPrecio(data.precio);
                setAno(data.ano);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('marca', marca);
        formData.append('modelo', modelo);
        formData.append('precio', precio);
        formData.append('ano', ano);
        if (foto) {
            formData.append('foto', foto);
        }

        await fetch(`http://localhost:3000/api/vehiculos/${id}`, {
            method: 'PUT',
            body: formData
        });

        navigate('/vehiculos');
    };

    return (
        <div>
            <h1>Editar Vehículo</h1>
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Marca</span>
                    <input type="text" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} />

                    <span className="input-group-text" id="inputGroup-sizing-default">Modelo</span>
                    <input type="text" className="form-control" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Año</span>
                    <input type="number" maxlength="4" className="form-control" value={ano} onChange={(e) => setAno(e.target.value)} />

                    <span className="input-group-text" id="inputGroup-sizing-default">Precio</span>
                    <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">foto</span>
                    <input type="file" className="form-control" onChange={(e) => setFoto(e.target.files[0])} />
                </div>
                
                <button className='btn btn-primary' type="submit">Agregar Vehículo</button>
            </form>
        </div>
    );
}

export default EditarVehiculo;