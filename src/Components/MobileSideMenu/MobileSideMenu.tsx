import React from 'react';
import './MobileSideMenu.css';

interface MobileSideMenuProps {
    isOpen: boolean; // Estado para controlar a visibilidade do menu
    onClose: () => void; // Função para fechar o menu
}

const MobileSideMenu: React.FC<MobileSideMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`mobile-side-menu ${isOpen ? 'open' : ''}`}>
            <div className="menu-overlay" onClick={onClose}></div>
            <div className="menu-content">
                <button className="close-button" onClick={onClose}>
                    ✕
                </button>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MobileSideMenu;
