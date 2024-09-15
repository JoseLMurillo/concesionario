import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vehiculos from './components/vehiculo/Vehiculos';
import AgregarVehiculo from './components/vehiculo/AgregarVehiculo';
import Nav from './components/nav';
import EditarVehiculo from './components/vehiculo/EditarVehiculo';
import Login from './components/usuario/Login';
import Signup from './components/usuario/UsuarioSignUp';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>

        <Routes>
          <Route path="/" element={<h1>Bienvenido al Concesionario</h1>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/agregarvehiculo" element={<AgregarVehiculo />} />
          <Route path="/vehiculos/:id/editar" element={<EditarVehiculo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;