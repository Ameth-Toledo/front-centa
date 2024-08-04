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
                <a href="/" className="header-link">Home</a>
                <a href="/ver-productos" className="header-link">Ver Productos</a>
                <a href="/vender-productos" className="header-link">Vender Productos</a>
                <a href="#rutinas" className="header-link">Registrar Clientes</a>
            </div>
            <Link to="/login" className="header-button">
                <FontAwesomeIcon icon={faUser} /> Iniciar sesión
            </Link>
        </div>
    );
}

export default BarEmpleado;
