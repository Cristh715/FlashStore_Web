// LoginRegister.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Message from '../Message/Message';
import './LoginRegister.css';

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [registerData, setRegisterData] = useState({ nombre: '', apellido: '', email: '', telefono: '', password: '' });
    const { login, register, error } = useContext(AuthContext);
    const navigate = useNavigate();

    const registerLink = () => setAction(' activeLogin');
    const loginLink = () => setAction('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (action === ' activeLogin') {
            setRegisterData(prevData => ({ ...prevData, [name]: value }));
        } else {
            setLoginData(prevData => ({ ...prevData, [name]: value }));
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const success = await login(loginData.username, loginData.password);
        console.log(success)
        if (success) {
            navigate('/home');
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const success = await register(registerData);
        if (success) {
            setShowMessage(true);
            setTimeout(() => {
                setAction('');
                setShowMessage(false);
            }, 3000);
        }
    };

    return (
        <>
            <div className={`wrapper${action}`}>
                <div className="form-box login">
                    <form className="formLoginRegister" onSubmit={handleLoginSubmit}>
                        <Link className="imgLogoLogin" to="/Home"><img src="./FlashStore_banner.webp" alt="Logo" /></Link>
                        <h1>Inicio de sesión</h1>
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Nombre de usuario" value={loginData.username} onChange={handleInputChange} required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Contraseña" value={loginData.password} onChange={handleInputChange} required />
                            <FaLock className="icon" />
                        </div>
                        <button type="submit">Inicia sesión</button>
                        {error && <p className="error">{error}</p>}
                        <p>No dispones de una cuenta? <a href="##" onClick={registerLink}>Registrate</a></p>
                    </form>
                </div>

                <div className="form-box register">
                    <form onSubmit={handleRegisterSubmit} className="formLoginRegister">
                        <Link className="imgLogoLogin" to="/Home"><img src="./logo.png" alt="Logo" /></Link>
                        <h1>Registro</h1>
                        <div className="input-box">
                            <input type="text" name="nombre" placeholder="Nombres" value={registerData.nombre} onChange={handleInputChange} required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="text" name="apellido" placeholder="Apellidos" value={registerData.apellido} onChange={handleInputChange} required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="email" name="email" placeholder="Correo electrónico" value={registerData.email} onChange={handleInputChange} required />
                            <FaEnvelope className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="tel" name="telefono" placeholder="Teléfono" value={registerData.telefono} onChange={handleInputChange} required />
                            <FaPhoneAlt className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Contraseña" value={registerData.password} onChange={handleInputChange} required />
                            <FaLock className="icon" />
                        </div>
                        <button type="submit">Registrar</button>
                        {error && <p className="error">{error}</p>}
                        <p>Ya tienes cuenta? <a href="##" onClick={loginLink}>Inicia sesión</a></p>
                    </form>
                </div>
            </div>
            {showMessage && <Message title="Registrado" message="¡Bienvenido a FlashStore!" message2="Inicie sesión para continuar" type="Success" />}
            <Link to="/home" className="buttonVolver"><div className="arrow">&lt;</div> Volver a la página principal</Link>
        </>
    );
};

export default LoginRegister;
