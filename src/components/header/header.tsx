import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { i18n } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
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
            <button className="translate-btn" onClick={toggleLanguage}>
                {i18n.language === "pt" ? "EN" : "PT"}
            </button>
        </header>
    );
};

export default Header;
