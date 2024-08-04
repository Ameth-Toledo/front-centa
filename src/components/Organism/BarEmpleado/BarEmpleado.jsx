import React from 'react';
import { Link } from 'react-router-dom'; 
import './BarEmpleado.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../../assets/logoGym.png"

function BarEmpleado() {
    return (
        <div className="header-container">
            <img src={logo} alt="Logo" className="header-logo" />
            <div className="header-links">
                <a href="/home-empleado" className="header-link">Home</a>
                <a href="/ver-productos" className="header-link">Ver Productos</a>
                <a href="/vender-productos" className="header-link">Vender Productos</a>
                <a href="/planes" className='header-link'>Planes</a>
                <a href="/clientes-registrados" className="header-link">Clientes Registrados</a>
            </div>
            <Link to="/login" className="header-button">
                <FontAwesomeIcon icon={faUser} /> Iniciar sesión
            </Link>
        </div>
    );
}

export default BarEmpleado;
