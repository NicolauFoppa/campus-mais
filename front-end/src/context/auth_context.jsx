
import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../models/user';
import { getMe } from '../services/api';

const AuthContext = createContext(null);

//GERENCIA A AUTENTICAÇÃO GLOBAL CRIANDO FACILITANDO O ACESSO A ESSES DADOS
//EM QUALQUER TELA

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

export const useAuth = () => {
    return useContext(AuthContext);
};