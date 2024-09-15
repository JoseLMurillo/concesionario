import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Vehiculos() {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/vehiculos')
            .then(response => response.json())
            .then(data => setVehiculos(data));
    }, []);

    return (
        <div>
            <h1>Vehiculos disponibles</h1>

            {vehiculos.map((vehiculo) => (
                <div key={vehiculo.id} className="card" Style="width: 18rem;">
                    <img src={`http://localhost:3000/uploads/${vehiculo.foto}`} alt="Foto del vehículo" width="200" />
                    <div className="card-body">
                        <h5 classNameName="card-title">{vehiculo.marca}</h5>
                        <h6>{vehiculo.modelo}</h6>
                        <p>${vehiculo.precio}</p>
                        <p className="card-text">{vehiculo.descripcion}</p>
                        <a href="#" className="btn btn-primary">Comprar</a>
                        <Link to={`/vehiculos/${vehiculo.id}/editar`}>Editar</Link>

                    </div>
                </div>
            ))}


        </div>
    )
}

export default Vehiculos