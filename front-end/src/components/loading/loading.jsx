// src/components/Loading/Loading.jsx

import React from 'react';
import './Loading.css';

// Nosso componente recebe uma 'message' opcional. 
// Se nenhuma for passada, ele usará "Carregando..."
export const Loading = ({ message = "Carregando..." }) => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">{message}</p>
        </div>
    );
};