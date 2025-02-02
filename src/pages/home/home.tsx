import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./home.css";

import gif from "../../assets/gif.gif";
import cais from "../../assets/cais.png";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import GitHubCalendar from "react-github-calendar";
import { MdGTranslate } from "react-icons/md";

const Home: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alternar entre abrir e fechar o menu
    };
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <h1 className="logo">KaykSilva</h1>
                    <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                        <a href="#home">Home</a>
                        <a href="#about">Projetos</a>
                        <a href="#about">Sobre</a>
                        <a href="#contact">Contato</a>
                    </nav>

                    <MdGTranslate onClick={toggleLanguage} className="translate-btn" size={24} />

                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </header>

            <div className="home-container section">
                <section className="initial">
                    <div className="initial-title">
                        <h1>{t("title")}</h1>
                        <p>{t("description")}</p>
                        <div className="social-icons">
                            <FaGithub size={20} className="git-icon" />
                            <a href="https://github.com/KaykSilva">GitHub</a>

                            <BsLinkedin size={20} className="linkedin-icon" />
                            <a href="https://www.linkedin.com/in/kayksilva/">Linkedin</a>

                            <GrInstagram size={20} className="instagram-icon" />
                            <a href="https://www.instagram.com/kayk.blr">Instagram</a>
                        </div>
                        <div className="line"></div>
                    </div>
                    <img src={gif} alt="Macho, tu ta atras doq aqui?" />
                </section>

                <div className="github-calendar section">
                    <div className="calendar">
                        <h1>{t("contributions")}</h1>
                        <GitHubCalendar username="KaykSilva" />
                    </div>
                </div>

                <section className="work-experience section">
                    <h1>{t("workExperience")}</h1>
                    <div className="works">
                        <div className="ifma">
                            <img
                                src="https://www.ifpb.edu.br/prpipg/inovacao/imagens-dit/ifma.png"
                                alt="IFMA"
                            />
                            <div className="text-area">
                                <h1>IFMA</h1>
                                <p>Frontend Developer</p>
                                <p className="date">2022 - 2023</p>
                                <p className="description">{t("description1")}</p>
                            </div>
                        </div>
                        <div className="ifma">
                            <img
                                src="https://www.ifpb.edu.br/prpipg/inovacao/imagens-dit/ifma.png"
                                alt="IFMA"
                            />
                            <div className="text-area">
                                <h1>IFMA</h1>
                                <p>Frontend Developer</p>
                                <p className="date">2023 - 2024</p>
                                <p className="description">{t("description2")}</p>
                            </div>
                        </div>

                        <div className="ifma">
                            <img src={cais} alt="Cais Hub" />
                            <div className="text-area">
                                <h1>Cais Hub</h1>
                                <p>Frontend Developer</p>
                                <p className="date">2024 </p>
                                <p className="description">{t("description3")}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Sobre</h3>
                            <p>Desenvolvedor frontend apaixonado por criar experiências digitais incríveis.</p>
                        </div>
                        <div className="footer-section">
                            <h3>Links Rápidos</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">Sobre</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Redes Sociais</h3>
                            <div className="social-icons">
                                <a href="https://github.com/KaykSilva" aria-label="GitHub">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/kayksilva/" aria-label="LinkedIn">
                                    <BsLinkedin size={24} />
                                </a>
                                <a href="https://www.instagram.com/kayk.blr" aria-label="Instagram">
                                    <GrInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Kayk Silva. Todos os direitos reservados.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;