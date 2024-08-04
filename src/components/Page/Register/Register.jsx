import React, { useState } from "react";
import Swal from 'sweetalert2';
import BarHome from "../../Organism/BarHome/BarHome";
import Footer from "../../Templates/Footer/Footer";
import logo from "../../../assets/logoGym.png";
import registerImage from "../../../assets/register.jpeg";
import './Register.css';
import { validateRegisterForm } from "./RegisterLogic";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = validateRegisterForm(name, email, password, confirmPassword);
        if (validationError) {
            return;
        }

        console.log('Formulario enviado con éxito');
        // Aquí puedes añadir la lógica para enviar los datos al servidor
    };

    return (
        <>
            <BarHome src={logo} />
            <div className="register-container">
                <div className="register-box">
                    <div className="register-image-half">
                        <img src={registerImage} alt="Registro" className="register-img" />
                    </div>
                    <div className="register-form-half">
                        <h2 className="register-heading">Registro</h2>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="register-input-group">
                                <label htmlFor="name" className="register-label">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Ingresa tu nombre"
                                    className="register-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="register-input-group">
                                <label htmlFor="email" className="register-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Ingresa tu correo"
                                    className="register-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="register-input-group">
                                <label htmlFor="password" className="register-label">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingresa tu contraseña"
                                    className="register-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="register-input-group">
                                <label htmlFor="confirmPassword" className="register-label">Confirmar Contraseña</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirma tu contraseña"
                                    className="register-input"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="register-submit-btn">
                                Registrarse
                            </button>
                            <p className="register-login-prompt">
                                ¿Ya tienes cuenta?{" "}
                                <a href="/login" className="register-login-link">
                                    Inicia sesión aquí
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
