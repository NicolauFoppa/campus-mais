import React from 'react';
import { Icon } from '../icons/icon';
import './disciplina_item.css';

//COMPONENTE ACCORDION UTILIZADO NA TELA DE MATRICULA, ACABOU NÃO SENDO IMPLEMENTADO

export const DisciplinaItem = ({ disciplina, isOpen, onClick }) => {

    const handleSairClick = (e) => {
        // Impede que o clique no botão feche o accordion
        e.stopPropagation();
        alert(`Você saiu da disciplina: ${disciplina.nome}`);
    };

    return (
        <div className="disciplina-item">
            <div className="disciplina-header" onClick={onClick}>
                <span>{disciplina.nome}</span>
                <Icon name="chevronDown" size={24} className={`disciplina-chevron ${isOpen ? 'open' : ''}`} />
            </div>
            <div className={`disciplina-content ${isOpen ? 'open' : ''}`}>
                <div className="disciplina-details">
                    <p><strong>Professor(a):</strong> {disciplina.professor}</p>
                    <p><strong>Código:</strong> {disciplina.codigo}</p>
                    <p><strong>Créditos:</strong> {disciplina.creditos}</p>
                </div>
                <button className="sair-button" onClick={handleSairClick}>Sair</button>
            </div>
        </div>
    );
};