import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [usuario_id, setUsuarioId] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get('/api/auth/usuario', { withCredentials: true });
                if (response.data.usuario_id) {
                    setIsLoggedIn(true);
                    setUserName(response.data.nombre);
                    setUsuarioId(response.data.usuario_id);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/login', { email, password }, { withCredentials: true });
            if (response.data.loggedIn) {
                setIsLoggedIn(true);
                setUserName(response.data.userName);
                setUsuarioId(response.data.usuario_id);
                Cookies.set('usuario_id', response.data.usuario_id);
            }
        } catch (error) {
            setError('Error de autenticación. Por favor, intente de nuevo.');
            console.error('Error de autenticación:', error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout', {}, { withCredentials: true });
            setIsLoggedIn(false);
            setUserName('');
            setUsuarioId(''); // Limpiar usuario_id
            Cookies.remove('usuario_id');
            navigate('/login');
        } catch (error) {
            setError('Error al cerrar sesión. Por favor, intente de nuevo.');
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName, usuario_id, login, logout, error, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
