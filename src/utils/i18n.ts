import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            title: "Web Developer & Tech Enthusiast",
            description:
                "I'm Kayk, a frontend developer with extensive experience, passionate about continuous learning and crafting innovative web and mobile solutions.",
            contributions: "Contributions in the Last Year",
            workExperience: "Work Experience",
            description1: "My first project at IFMA, I built a website to promote the results of a study on Local Productive Arrangements (APLs) in cities of Maranhão that have IFMA campuses.",
            description2: "Worked as a Front-End Developer at a startup in partnership with the IFMA Innovation Factory - Araioses Campus and the Biodonto Dental Clinic",
            description3: "I am currently working as a Front-End Developer at DashMed, in collaboration with the CAIS HUB, in the development of an AI-based Telemedicine system for emergency and urgent care,",
        },
    },
    pt: {
        translation: {
            title: "Desenvolvedor Web & Entusiasta de Tecnologia",
            description:
                "Sou Kayk, um desenvolvedor frontend experiente, apaixonado por aprendizado contínuo e por criar soluções inovadoras para web e mobile.",
            contributions: "Contribuições do Último Ano",
            workExperience: "Experiência Profissional",
            description1: "Meu primeiro projeto pelo IFMA, desenvolvi um site para divulgar os resultados de uma pesquisa sobre Arranjos Produtivos Locais (APLs) em cidades do Maranhão que possuem campus do IFMA.",
            description2: "Trabalhei como desenvolvedor Front-End em uma startup em parceria com a Fábrica de Inovação do IFMA - Campus Araioses e a Clínica Odontológica Biodonto",
            description3: "Atualmente, trabalho como desenvolvedor Front-End na startup DashMed, em colaboração com o CAIS HUB, no desenvolvimento de um sistema de Telemedicina para atendimentos de emergência e urgência, utilizando inteligência artificial para auxiliar no pré-diagnóstico e tratamentos",

        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "pt", // Idioma padrão
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
