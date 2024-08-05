import React from 'react';
import { Link } from 'react-router-dom'; 
import './BarAdministrador.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../../assets/logoGym.png";

function BarAdministrador() {
    return (
        <div className="header-wrapper">
            <img src={logo} alt="Logo" className="header-logo" />
            <div className="header-menu">
                <a href="/home-administrador" className="header-item">Home</a>
                <a href="/agregar-productos" className="header-item">Agregar Productos</a>
                <a href="/planes" className='header-item'>Planes</a>
                <a href="/ver-productos-agregados" className='header-item'>Ver Productos</a>
            </div>
            <Link to="/login" className="header-login">
                <FontAwesomeIcon icon={faUser} /> Iniciar sesión
            </Link>
        </div>
    );
}

export default BarAdministrador;
