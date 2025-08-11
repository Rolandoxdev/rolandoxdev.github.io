import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Hero Section
      hero: {
        name: "Rolando Orellana",
        title: {
          creative: "Creativity",
          developer: "Developer",
          innovative: "Innovation",
          passionate: "Strategy",
        },
        description:
          "Frontend Developer with a rare blend of coding, design, and business strategy. 2+ years of experience in web and mobile apps using React & React Native, plus 6+ years in design and digital marketing.",
        scrollDown: "Scroll Down",
      },

      // General
      about: "About",
      about_me_description:
        "I’m not just a frontend developer—I’m a designer with over 6 years of experience and a business-minded thinker. This means I approach problems with creativity, code with purpose, and build interfaces that are not only beautiful, but usable and strategic. I bring value to teams that want more than execution—they want someone who understands users, product, and goals.",
      about_me_title: "Why hire me?",
      all_rights_reserved: "All rights reserved",
      contact: "Contact",
      contact_info: "Contact",
      download_cv: "Download CV",
      home: "Home",
      live_preview: "Live preview",
      projects: "Projects",
      certifications: "Certifications",
      view_certificate: "View Certificate",
      view_repo: "View Repo",
      whatsapp_cta: "Let's Connect!",

      // Projects Section
      projects_subtitle:
        "Delivering impactful products tailored to real-world needs.",
      byteCode_description:
        "byteCode is a modern landing page built with React.js and Material UI. Designed to attract and convert users, it showcases a dynamic and responsive design.",
      Reco_description:
        "Reco, developed in React.js with Redux and RTK Query, connects users with verified professionals. Its atomic design ensures scalability and a seamless experience.",
      RecoApp_description:
        "Built with React Native, Expo, Redux, and RTK Query, connects users with verified professionals. Its atomic design ensures scalability and a seamless experience.",
      Superheroes_description:
        "Built with React Native and TypeScript for superhero team management. Implements team CRUD, biometric authentication, offline search, and favorites, using Redux Toolkit for global state, API consumption, and data persistence.",
      FocusTime_description:
        "FocusTime is a productivity app built with React Native and Expo. The app is cross-platform, leveraging hooks for state management and Git for version control.",
      Portfolio_description:
        "This portfolio was built with React.js, Vite, and Material UI, it features a modern, responsive design and smooth animations.",
    },
  },
  es: {
    translation: {
      // Hero Section
      hero: {
        name: "Rolando Orellana",
        title: {
          creative: "Creatividad",
          developer: "Developer",
          innovative: "Innovación",
          passionate: "Apasionado",
        },
        description:
          "Desarrollador Frontend con una rara mezcla de codificación, diseño y estrategia de negocio. Más de 2 años de experiencia en aplicaciones web y móviles con React y React Native, además de más de 6 años en diseño y marketing digital.",
        scrollDown: "Deslizar hacia abajo",
      },
      // General
      about: "Acerca",
      about_me_description:
        "No soy solo un desarrollador frontend: también soy diseñador con más de 6 años de experiencia y tengo una mentalidad estratégica gracias a mi formación en negocios (MBA). Esto me permite abordar los proyectos con creatividad, programar con propósito y construir interfaces que no solo son atractivas, sino también usables y estratégicas. Aporto valor a equipos que buscan más que ejecución: buscan alguien que entienda al usuario, el producto y los objetivos.",
      about_me_title: "¿Por qué contratarme?",
      all_rights_reserved: "Todos los derechos reservados",
      contact: "Contacto",
      contact_info: "Contacto",
      download_cv: "Descargar CV",
      home: "Inicio",
      live_preview: "Vista previa",
      projects: "Proyectos",
      certifications: "Certificaciones",
      view_certificate: "Ver certificado",
      view_repo: "Ver Repositorio",
      whatsapp_cta: "¡Hablemos!",

      // Projects Section
      projects_subtitle:
        "Transformando ideas en productos funcionales y centrados en el usuario.",
      byteCode_description:
        "byteCode es una página de aterrizaje moderna construida con React.js y Material UI. Diseñada para atraer y convertir usuarios, muestra un diseño dinámico y responsivo.",
      Reco_description:
        "Desarrollada en React.js con Redux y RTK Query, conecta usuarios con profesionales verificados. Su diseño atómico garantiza escalabilidad y fluidez.",
      RecoApp_description:
        "Reco App, desarrollada en React Native con Expo, Redux y RTK Query, conecta usuarios con profesionales verificados. Su diseño atómico garantiza escalabilidad y una experiencia fluida.",
      Superheroes_description:
        "App móvil en React Native y TypeScript para gestión de equipos de superhéroes. Implementa CRUD de equipos, autenticación biométrica, búsqueda offline y favoritos, usando Redux Toolkit para estado global, consumo de API y persistencia de datos.",
      FocusTime_description:
        "FocusTime es una app de productividad construida con React Native y Expo. Es multiplataforma y emplea hooks para el estado y Git para el control de versiones.",
      Portfolio_description:
        "Este portafolio fue construido con React.js, Vite y Material UI, cuenta con un diseño moderno, responsivo y animaciones fluidas.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
