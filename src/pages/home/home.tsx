import Header from "../../components/header/header"
import "./home.css"

import gif from "../../assets/gif.gif"
import cais from "../../assets/cais.png"
import { FaGithub } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { GrInstagram } from "react-icons/gr"

import GitHubCalendar from 'react-github-calendar'
const Home: React.FC = () => {

    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="home-container section">
                <section className="initial">
                    <div className="initial-title">
                        <h1>Desenvolvedor web & alguma coisa</h1>
                        <p>
                            I'm Kayk, an experienced frontend developer passionate about learning
                            and building open-source software that is beneficial to developers
                            and the world at large.
                        </p>
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
                        <h1>Contribuitons of the last year</h1>
                        <GitHubCalendar username="KaykSilva" />
                    </div>

                </div>

                <section className="work-experience section">
                    <h1>Work Experience</h1>
                    <div className="works">
                        <div className="ifma">
                            <img src="https://www.ifpb.edu.br/prpipg/inovacao/imagens-dit/ifma.png" alt="IFMA" />
                            <div className="text-area">
                                <h1>IFMA</h1>
                                <p>Frontend Developer</p>
                                <p className="date">2022 - 2023</p>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="ifma">
                            <img src="https://www.ifpb.edu.br/prpipg/inovacao/imagens-dit/ifma.png" alt="IFMA" />
                            <div className="text-area">
                                <h1>IFMA</h1>
                                <p>Frontend Developer</p>
                                <p className="date">2023 - 2024</p>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>

                        <div className="ifma">
                            <img src={cais} alt="Cais Hub" />
                            <div className="text-area">
                                <h1>Cais Hub</h1>
                                <p>Frontend Developer</p>
                                <p className="date">2024 - 2025</p>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>

        </>
    )
}

export default Home