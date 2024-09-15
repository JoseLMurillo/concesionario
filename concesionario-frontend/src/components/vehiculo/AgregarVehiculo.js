import React, { useState } from 'react'

function AgregarVehiculo() {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState('');
    const [ano, setAno] = useState('');
    const [foto, setFoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('marca', marca);
        formData.append('modelo', modelo);
        formData.append('precio', precio);
        formData.append('ano', ano);
        if (foto) {
            formData.append('foto', foto);  // Adjuntamos la foto solo si existe
        }

        if (!marca || !modelo || !precio || !ano) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        await fetch('http://localhost:3000/api/vehiculos', {
            method: 'POST',
            body: formData
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Marca</span>
                <input type="text" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} />

                <span className="input-group-text" id="inputGroup-sizing-default">Modelo</span>
                <input type="text" className="form-control" value={modelo} onChange={(e) => setModelo(e.target.value)} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Año</span>
                <input type="date" className="form-control" value={ano} onChange={(e) => setAno(e.target.value)} />

                <span className="input-group-text" id="inputGroup-sizing-default">Precio</span>
                <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">foto</span>
                <input type="file" className="form-control" onChange={(e) => setFoto(e.target.files[0])} />
            </div>

            <button className='btn btn-primary' type="submit">Agregar Vehículo</button>
        </form>
    );
}

export default AgregarVehiculo;