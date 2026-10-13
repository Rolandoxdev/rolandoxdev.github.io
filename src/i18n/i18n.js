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
          "React Native Developer with 2.5+ years of experience building and shipping production-ready mobile apps using React Native, Redux Toolkit, and REST APIs, including multi-tenant architectures and App Store releases.",
        scrollDown: "Scroll Down",
      },

      // General
      about: "About",
      about_me_description:
        "I’m a React Native developer with a strong foundation in design and product thinking. With over 6 years of experience in design and digital strategy, I bring a unique perspective that combines usability, aesthetics, and technical execution. I don’t just build interfaces — I focus on creating scalable, user-centered solutions that align with real business needs. I’ve worked on production applications, collaborating with cross-functional teams to deliver features that improve workflows and user experience. I add value to teams that care about quality, usability, and building products that truly work in real-world scenarios.",
      about_me_title: "Why hire me?",
      all_rights_reserved: "All rights reserved",
      contact: "Contact",
      contact_info: "Contact",
      download_cv: "Download CV",
      home: "Home",
      live_preview: "Live preview",
      projects: "Projects",
      certifications: "Certifications",
      case_study: {
        cta: "Case Study",
        ctaFor: "View the {{project}} case study",
        backToProjects: "Back to Projects",
        eyebrow: "MOBILE APPLICATION CASE STUDY",
        subtitle: "React Native Application Development",
        overview:
          "Trakkon is a mobile application for emergency medical services and durable medical equipment (DME) operations, supporting workflows for calls, equipment, users, accounts, and departments.",
        roleLabel: "Role",
        role: "React Native / Frontend Developer",
        stackLabel: "Core stack",
        challengeTitle: "The Challenge",
        challenge:
          "Improve the reliability of an existing application while maintaining operational workflows, role-based access, and separate client configurations.",
        contributionsTitle: "Key Contributions",
        contributions: [
          {
            title: "Application stability",
            description:
              "Investigated and fixed bugs, improved existing workflows, and addressed inconsistent UI behavior through ticket-based development.",
          },
          {
            title: "Role-based permissions",
            description:
              "Extended existing permission checks to control access to actions based on user roles and call assignments.",
          },
          {
            title: "Dynamic forms",
            description:
              "Improved required-field validation across five call types, including resetting validation errors when users switch between types.",
          },
          {
            title: "Multi-client support",
            description:
              "Supported Trakkon and Chesed of Flatbush (COF) configurations from a shared mobile codebase.",
          },
          {
            title: "Mobile delivery",
            description:
              "Generated Android APK builds for QA, prepared iOS builds for TestFlight, and participated in Android and iOS release workflows.",
          },
        ],
        highlightLabel: "TECHNICAL HIGHLIGHT",
        highlightTitle: "Backend data consistency",
        highlight:
          "Implemented a Laravel API query fix that grouped alternative equipment statuses within the account filter, preserving the intended account-scoping condition.",
        outcomeTitle: "Outcome",
        outcome:
          "Contributed to more consistent application workflows, corrected reported defects, and supported QA and release delivery across multiple client configurations.",
        technologiesTitle: "Technologies",
        technologies: [
          "React Native",
          "TypeScript",
          "Expo / EAS",
          "Expo Router",
          "Zustand",
          "React Hook Form",
          "Laravel",
          "PHP",
          "REST API",
        ],
      },
      view_certificate: "View Certificate",
      view_repo: "View Repo",
      whatsapp_cta: "Let's Connect!",

      // Projects Section
      projects_subtitle:
        "Building production-ready solutions focused on real-world impact and scalability.",
      Trakkon_description:
        "Multi-tenant React Native app for a Brooklyn, NY organization, supporting multiple clients from a single codebase. Worked on core features, UX, API integration, and production releases (iOS & Android).",
      byteCode_description:
        "byteCode is a modern landing page built with React.js and Material UI. Designed to attract and convert users, it showcases a dynamic and responsive design.",
      Reco_description:
        "Reco, developed in React.js with Redux and RTK Query, connects users with verified professionals. Its atomic design ensures scalability and a seamless experience.",
      RecoApp_description:
        "Built with React Native, Expo, Redux, and RTK Query, connects users with verified professionals. Published on Google Play Store. Its atomic design ensures scalability and a seamless experience.",
      Superheroes_description:
        "Built with React Native and TypeScript for superhero team management. Implements team CRUD, biometric authentication, offline search, and favorites, using Redux Toolkit for global state, API consumption, and data persistence.",
      FocusTime_description:
        "FocusTime is a productivity app built with React Native and Expo. The app is cross-platform, leveraging hooks for state management and Git for version control.",
      Alltix_description:
        "Responsive landing page (React + Material UI) for a Brooklyn, NY client, focused on clean UI and conversion-driven UX.",
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
          "Desarrollador React Native con 2.5+ años de experiencia construyendo y lanzando aplicaciones móviles en producción. Especializado en arquitecturas escalables, sistemas multi-tenant y despliegues en App Store usando React Native, Redux Toolkit y APIs REST.",
        scrollDown: "Deslizar hacia abajo",
      },
      // General
      about: "Acerca",
      about_me_description:
        "Soy desarrollador React Native con una sólida base en diseño y pensamiento de producto. Con más de 6 años de experiencia en diseño y estrategia digital, aporto una perspectiva que combina usabilidad, estética y ejecución técnica.\n\nHe trabajado en aplicaciones móviles en producción, incluyendo un sistema multi-tenant que soporta múltiples organizaciones desde un solo codebase. Mi experiencia va más allá del desarrollo: contribuyo en decisiones de UX, flujos de datos y procesos de release.\n\nMe enfoco en crear soluciones escalables, centradas en el usuario y alineadas con necesidades reales de negocio.",
      about_me_title: "¿Por qué contratarme?",
      all_rights_reserved: "Todos los derechos reservados",
      contact: "Contacto",
      contact_info: "Contacto",
      download_cv: "Descargar CV",
      home: "Inicio",
      live_preview: "Vista previa",
      projects: "Proyectos",
      certifications: "Certificaciones",
      case_study: {
        cta: "Caso de estudio",
        ctaFor: "Ver el caso de estudio de {{project}}",
        backToProjects: "Volver a proyectos",
        eyebrow: "CASO DE ESTUDIO DE APLICACIÓN MÓVIL",
        subtitle: "Desarrollo de aplicaciones con React Native",
        overview:
          "Trakkon es una aplicación móvil para servicios médicos de emergencia y operaciones de equipos médicos duraderos (DME), con flujos de trabajo para llamadas, equipos, usuarios, cuentas y departamentos.",
        roleLabel: "Rol",
        role: "Desarrollador React Native / Frontend",
        stackLabel: "Tecnologías principales",
        challengeTitle: "El desafío",
        challenge:
          "Mejorar la confiabilidad de una aplicación existente mientras se mantienen los flujos operativos, el acceso basado en roles y las configuraciones separadas para cada cliente.",
        contributionsTitle: "Contribuciones principales",
        contributions: [
          {
            title: "Estabilidad de la aplicación",
            description:
              "Investigué y corregí errores, mejoré flujos existentes y resolví comportamientos inconsistentes de la interfaz mediante desarrollo basado en tickets.",
          },
          {
            title: "Permisos basados en roles",
            description:
              "Amplié las verificaciones de permisos existentes para controlar el acceso a acciones según los roles de usuario y las asignaciones de llamadas.",
          },
          {
            title: "Formularios dinámicos",
            description:
              "Mejoré la validación de campos obligatorios en cinco tipos de llamada, incluido el reinicio de errores de validación al cambiar entre tipos.",
          },
          {
            title: "Soporte para múltiples clientes",
            description:
              "Di soporte a las configuraciones de Trakkon y Chesed of Flatbush (COF) desde una base de código móvil compartida.",
          },
          {
            title: "Entrega móvil",
            description:
              "Generé compilaciones APK de Android para QA, preparé compilaciones de iOS para TestFlight y participé en los flujos de lanzamiento para Android e iOS.",
          },
        ],
        highlightLabel: "DESTACADO TÉCNICO",
        highlightTitle: "Consistencia de datos en el backend",
        highlight:
          "Implementé una corrección en una consulta de la API Laravel que agrupó estados alternativos de equipos dentro del filtro de cuenta, preservando la condición prevista para limitar los datos por cuenta.",
        outcomeTitle: "Resultado",
        outcome:
          "Contribuí a lograr flujos de aplicación más consistentes, corregí defectos reportados y apoyé la entrega de QA y lanzamientos en múltiples configuraciones de clientes.",
        technologiesTitle: "Tecnologías",
        technologies: [
          "React Native",
          "TypeScript",
          "Expo / EAS",
          "Expo Router",
          "Zustand",
          "React Hook Form",
          "Laravel",
          "PHP",
          "REST API",
        ],
      },
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
        "Reco App, desarrollada en React Native con Expo, Redux y RTK Query, conecta usuarios con profesionales verificados. Publicada en Google Play Store. Su diseño atómico garantiza escalabilidad y una experiencia fluida.",
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
