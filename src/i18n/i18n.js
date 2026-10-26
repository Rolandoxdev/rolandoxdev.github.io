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
          creative: "Designer",
          developer: "Developer",
          innovative: "Innovator",
          passionate: "Strategist",
        },
        description:
          "React Native Developer with 3 years of experience building and shipping production-ready mobile apps using React Native, Redux Toolkit, and REST APIs, including multi-tenant architectures and App Store releases.",
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
        cta: "View Case Study",
        ctaFor: "View the {{project}} case study",
        backToProjects: "Back to Projects",
        eyebrow: "MOBILE APPLICATION CASE STUDY",
        subtitle: "React Native Application Development",
        imageAlt:
          "Chesed of Flatbush sign-in screen displayed in a mobile device mockup",
        imageCaption: "Chesed of Flatbush client configuration",
        overview:
          "Multi-tenant React Native application for emergency medical services and durable medical equipment (DME) operations. Developed for an organization based in Brooklyn, NY, it supports calls, equipment, users, accounts, and departments through a shared codebase designed to accommodate multiple client configurations. I contributed to core features, UX improvements, REST API integration, backend fixes, and production delivery across iOS and Android.",
        roleLabel: "Role",
        role: "React Native Developer | Frontend | Backend Contributions",
        challengeTitle: "The Challenge",
        challenge:
          "Improve the reliability of an existing mobile application, refine operational workflows, and support testing and releases across multiple client configurations.",
        contributionsTitle: "Key Contributions",
        contributions: [
          {
            title: "Application stability and workflow improvements",
            description:
              "Investigated and resolved reported bugs, refined existing workflows, and incorporated feedback from QA and beta testers.",
          },
          {
            title: "Backend development and API fixes",
            description:
              "Worked on QA-reported Laravel tickets for call creation and editing, assignments, manager permissions, and department access. Fixed an equipment query to scope alternative statuses to the selected account, and contributed to CSV imports using Laravel Artisan commands.",
          },
          {
            title: "Dynamic forms and role-based access",
            description:
              "Extended existing permission checks and improved required-field validation across five call types, including resetting validation errors when users switched types.",
          },
          {
            title: "Multi-client configuration and delivery",
            description:
              "Supported Trakkon and Chesed of Flatbush (COF) configurations in a shared React Native codebase. Used Expo EAS build profiles and client-specific environment variables to produce distinct builds.",
          },
          {
            title: "App store releases and OTA updates",
            description:
              "Managed iOS and Android store tasks: uploads, listings, metadata, screenshots, and rejection resolution. Prepared Android QA APKs and iOS TestFlight builds, participated in releases, and supported OTA updates.",
          },
        ],
        outcomeTitle: "Outcome",
        outcome:
          "My contributions helped move the application from beta testing toward operational use. I worked on resolving defects identified through QA and beta testing, supported the import of call and equipment records with their statuses and history, and managed app-store submissions and releases across iOS and Android. As the application rolled out, users began transitioning their day-to-day workflows from ClickUp to Trakkon.",
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
      reco_case_study: {
        eyebrow: "MOBILE MARKETPLACE CASE STUDY",
        imageAlt: "Reco mobile marketplace screens displayed in device mockups",
        role: "React Native Developer | Frontend & Product Development",
        technologies: [
          "React Native",
          "TypeScript",
          "Expo / EAS",
          "Redux Toolkit",
          "RTK Query",
          "REST API",
        ],
        overview:
          "Reco is a mobile services marketplace for Guatemala, designed to help people find and hire independent professionals. By bringing service discovery, bookings, and ratings together, it aims to make choosing a provider feel more trustworthy.",
        contributionsTitle: "Key Contributions",
        contributions: [
          {
            title: "Frontend development and product experience",
            description:
              "Led most of the React Native frontend and contributed to product, UI, and UX decisions in collaboration with the project lead.",
          },
          {
            title: "API integration and state management",
            description:
              "Integrated backend APIs using Redux Toolkit and RTK Query, and supported local development with Postman, Docker, and environment configuration.",
          },
          {
            title: "Core marketplace workflows",
            description:
              "Built key user-facing flows for account access, service listings, bookings and orders, chat, favorites, and ratings.",
          },
          {
            title: "Android delivery and release",
            description:
              "Contributed to Android build preparation and the MVP's Google Play release, alongside a lead responsible for backend development.",
          },
        ],
        outcomeTitle: "Outcome",
        outcome:
          "The MVP was published on Google Play. Later repository updates were not released to the store, and the project is pending further development. A white-label solution for organizations with similar needs is a possible future direction.",
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
        "A React Native marketplace connecting people in Guatemala with independent service professionals. Its MVP was published on Google Play.",
      Superheroes_description:
        "Built with React Native and TypeScript for superhero team management. Implements team CRUD, biometric authentication, offline search, and favorites, using Redux Toolkit for global state, API consumption, and data persistence.",
      FocusTime_description:
        "FocusTime is a productivity app built with React Native and Expo. The app is cross-platform, leveraging hooks for state management and Git for version control.",
      Alltix_description:
        "Responsive landing page (React + Material UI) for a Brooklyn, NY client, focused on clean UI and conversion-driven UX.",
      TikiMaya_description:
        "This is a store built using React and Material UI. Its landing page showcases products and gift sets through a modern, responsive design, with a focus on facilitating purchases via WhatsApp.",
    },
  },
  es: {
    translation: {
      // Hero Section
      hero: {
        name: "Rolando Orellana",
        title: {
          creative: "Diseñador",
          developer: "Desarrollador",
          innovative: "Innovador",
          passionate: "Estratega",
        },
        description:
          "Desarrollador React Native con 3 años de experiencia construyendo y lanzando aplicaciones móviles en producción. Construyendo arquitecturas escalables, sistemas multi-tenant y despliegues en App Store usando React Native, Redux Toolkit y APIs REST.",
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
      webTitle: "Proyectos Web",
      mobileTitle: "Proyectos Móviles",
      certifications: "Certificaciones",
      case_study: {
        cta: "Ver caso de estudio",
        ctaFor: "Ver el caso de estudio de {{project}}",
        backToProjects: "Volver a proyectos",
        eyebrow: "CASO DE ESTUDIO DE APLICACIÓN MÓVIL",
        subtitle: "Desarrollo de aplicaciones con React Native",
        imageAlt:
          "Pantalla de inicio de sesión de Chesed of Flatbush en un dispositivo móvil",
        imageCaption: "Configuración del cliente Chesed of Flatbush",
        overview:
          "Aplicación multi-tenant de React Native para operaciones de servicios médicos de emergencia y equipos médicos duraderos (DME). Destinada a una organización con sede en Brooklyn, NY, permite gestionar llamadas, equipos, usuarios, cuentas y departamentos desde una base de código compartida, preparada para distintas configuraciones de clientes. Contribuí a funcionalidades principales, mejoras de UX, integración con API REST, correcciones backend y entregas de producción para iOS y Android.",
        roleLabel: "Rol",
        role: "Desarrollador React Native | Frontend | Contribuciones Backend",
        challengeTitle: "El desafío",
        challenge:
          "Mejorar la confiabilidad de una aplicación móvil existente, perfeccionar los flujos operativos y apoyar las pruebas y los lanzamientos en distintas configuraciones de clientes.",
        contributionsTitle: "Contribuciones principales",
        contributions: [
          {
            title: "Estabilidad de la aplicación y mejoras de flujos",
            description:
              "Investigué y resolví errores reportados, refiné flujos existentes e incorporé comentarios de QA y beta testers.",
          },
          {
            title: "Desarrollo backend y correcciones de API",
            description:
              "Trabajé en tickets de Laravel reportados por QA sobre creación y edición de llamadas, asignaciones, permisos de gerencia y acceso por departamento. Corregí una consulta de equipos para limitar estados alternativos a la cuenta seleccionada y contribuí a importaciones CSV con comandos Artisan de Laravel.",
          },
          {
            title: "Formularios dinámicos y acceso por roles",
            description:
              "Amplié las verificaciones de permisos existentes y mejoré la validación de campos obligatorios en cinco tipos de llamada, reiniciando los errores de validación cuando se cambiaba de tipo.",
          },
          {
            title: "Configuración multi-cliente y entrega",
            description:
              "Di soporte a las configuraciones de Trakkon y Chesed of Flatbush (COF) en una base de código compartida de React Native. Usé perfiles de compilación de Expo EAS y variables de entorno por cliente para generar compilaciones distintas.",
          },
          {
            title: "Lanzamientos en tiendas y actualizaciones OTA",
            description:
              "Gestioné tareas en tiendas para iOS y Android: cargas, fichas, metadatos, capturas y resolución de rechazos. Preparé APK de Android para QA y compilaciones de iOS para TestFlight, participé en lanzamientos y di soporte a actualizaciones OTA.",
          },
        ],
        outcomeTitle: "Resultado",
        outcome:
          "Mis contribuciones ayudaron a llevar la aplicación desde las pruebas beta hacia el uso operativo. Trabajé en la resolución de defectos identificados por QA y durante las pruebas beta, apoyé la importación de registros de llamadas y equipos con sus estados e historial, y gestioné envíos y lanzamientos en tiendas para iOS y Android. Durante la implementación, los usuarios comenzaron a trasladar sus flujos de trabajo diarios de ClickUp a Trakkon.",
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
      reco_case_study: {
        eyebrow: "CASO DE ESTUDIO DE MARKETPLACE MÓVIL",
        imageAlt: "Pantallas del marketplace móvil Reco en dispositivos",
        role: "Desarrollador React Native | Desarrollo frontend y de producto",
        technologies: [
          "React Native",
          "TypeScript",
          "Expo / EAS",
          "Redux Toolkit",
          "RTK Query",
          "REST API",
        ],
        overview:
          "Reco es un marketplace móvil de servicios en Guatemala, diseñado para ayudar a las personas a encontrar y contratar profesionales independientes. Al reunir la búsqueda de servicios, las reservas y las calificaciones, busca dar más confianza al elegir un proveedor.",
        contributionsTitle: "Contribuciones principales",
        contributions: [
          {
            title: "Desarrollo frontend y experiencia de producto",
            description:
              "Lideré gran parte del frontend en React Native y participé en decisiones de producto, UI y UX en colaboración con el lead del proyecto.",
          },
          {
            title: "Integración de APIs y gestión de estado",
            description:
              "Integré APIs del backend con Redux Toolkit y RTK Query, y apoyé el desarrollo local con Postman, Docker y configuración de variables de entorno.",
          },
          {
            title: "Flujos principales del marketplace",
            description:
              "Desarrollé flujos de cara al usuario para acceso a cuentas, publicación de servicios, reservas y órdenes, chat, favoritos y calificaciones.",
          },
          {
            title: "Entrega y publicación en Android",
            description:
              "Contribuí a preparar builds de Android y a publicar el MVP en Google Play, junto con un lead responsable del desarrollo backend.",
          },
        ],
        outcomeTitle: "Resultado",
        outcome:
          "El MVP se publicó en Google Play. Las actualizaciones posteriores del repositorio no llegaron a publicarse en la tienda y el proyecto está pendiente de continuar. Una solución white-label para organizaciones con necesidades similares es una posible evolución futura.",
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
        "Marketplace móvil en React Native que conecta a personas en Guatemala con profesionales independientes. Su MVP se publicó en Google Play.",
      Superheroes_description:
        "App móvil en React Native y TypeScript para gestión de equipos de superhéroes. Implementa CRUD de equipos, autenticación biométrica, búsqueda offline y favoritos, usando Redux Toolkit para estado global, consumo de API y persistencia de datos.",
      FocusTime_description:
        "FocusTime es una app de productividad construida con React Native y Expo. Es multiplataforma y emplea hooks para el estado y Git para el control de versiones.",
      Portfolio_description:
        "Este portafolio fue construido con React.js, Vite y Material UI, cuenta con un diseño moderno, responsivo y animaciones fluidas.",
        TikiMaya_description:
        "Es una tienda creada con React y Material UI. Su landing page presenta productos y kits de regalo mediante un diseño moderno, adaptable y enfocado en facilitar las compras por WhatsApp.",
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
