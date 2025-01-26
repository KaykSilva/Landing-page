import React from 'react';
import './header.css';
const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <h1>Meu Site</h1>
            </div>
            <nav>
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
