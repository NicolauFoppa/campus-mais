// frontend/src/context/AuthContext.jsx - VERSÃO CORRETA E FINAL

import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../models/user';
import { getMe } from '../services/api';

// Criamos o contexto, mas NÃO o exportamos. Ele é um detalhe interno deste arquivo.
const AuthContext = createContext(null);

// Exportamos o Provedor, que irá envolver nossa aplicação
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUserFromToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await getMe(token);
                    if (response.success) {
                        setUser(new User(response.data));
                    }
                } catch (error) {
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        loadUserFromToken();
    }, []);

    const login = (apiResponse) => {
        localStorage.setItem('token', apiResponse.token);
        setUser(new User(apiResponse.user));
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const value = { user, setUser, login, logout, isAuthenticated: !!user, loading };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// AQUI ESTÁ A CHAVE: Criamos e exportamos um hook customizado.
// Ele que será usado pelos outros componentes.
export const useAuth = () => {
    return useContext(AuthContext);
};