import React, { useState } from "react";
import login from "../../../assets/login.jpeg";
import BarHome from "../../Organism/BarHome/BarHome"
import Footer from "../../Templates/Footer/Footer"
import logo from "../../../assets/logoGym.png"
import './Login.css';
import { validateLoginForm } from "./LoginLogic";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (validateLoginForm(email, password)) {
            console.log('Formulario enviado con éxito');
        }
    };

    return (
        <>
            <BarHome src={logo}/>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-image-half">
                        <img src={login} alt="Bazar" className="login-img" />
                    </div>
                    <div className="login-form-half">
                        <h2 className="login-heading">Iniciar Sesión</h2>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="login-input-group">
                                <label htmlFor="email" className="login-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Ingresa tu correo"
                                    className="login-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            <div className="login-input-group">
                                <label htmlFor="password" className="login-label">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingresa tu contraseña"
                                    className="login-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            <button type="submit" className="login-submit-btn">
                                Iniciar Sesión
                            </button>
                        </form>
                        <p className="login-register-prompt">
                            ¿No tienes cuenta?{" "}
                            <a href="/register" className="login-register-link">
                                Regístrate aquí
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
