import React, { useState } from 'react';
import './header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
    };

    return (
        <header>
            <div className="logo">
                <h1>Meu Site</h1>
            </div>
            <nav className={isMenuOpen ? 'active' : ''}>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;