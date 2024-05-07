export interface ImageData {
    id: number;
    src: string;
    title: string;
    text: string;
}

export interface ContacData {
    id: number;
    href: string;
    title: string;
    text: string;
}

export interface StackData {
    id: number;
    src: string;
    title: string;
    description: string;
}

export const imageData: ImageData[] = [
    {
        id: 1,
        src: "/assets/image/SGSST.png",
        title: "Sistema de Gestion de Seguridad y Salud en el Trabajo.",
        text: "El SGSST (Sistema de Gestión de Seguridad y Salud en el Trabajo) fue un proyecto desarrollado durante un curso llevado a cabo por la Fundación View en colaboración con Comfenalco Antioquia."
    },
    {
        id: 2,
        src: "/assets/image/WORIN.png",
        title: "WORIN",
        text: "WORIN fue un proyecto desarrollado durante un programa tecnológico llevado a cabo por el SENA."
    }
]

export const contacData: ContacData[] = [
    {
        id: 1,
        href: "https://github.com/pablitog21",
        title: "GitHub",
        text: "Mi perfil de GitHub"
    },
    {
        id: 2,
        href: "https://www.instagram.com/pablitog_21",
        title: "Instagram",
        text: "Mi perfil de Instagram"
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/juan-david-mar%C3%ADn-zuluaica-5339a820b",
        title: "LinkedIn",
        text: "Mi perfil de LinkedIn<"
    }
]

export const stackData: StackData[] = [
    {
        id: 1,
        src: "/assets/image/angular.png",
        title: "Angular",
        description: "Tengo experiencia sólida en Angular y su integración con herramientas como Tailwind y Trasloco."
    },
    {
        id: 2,
        src: "/assets/image/nextjs.png",
        title: "NextJs",
        description: "Tengo sólidas bases en Next.js y estoy listo para aplicarlas en proyectos."
    },
    {
        id: 3,
        src: "/assets/image/spring-boot.png",
        title: "Spring Boot",
        description: "Tengo buenas bases en Spring Boot, lo que me permite desarrollar aplicaciones Java de manera eficiente."
    },
    {
        id: 4,
        src: "/assets/image/postgresql.png",
        title: "PostgreSQL",
        description: "Tengo sólidas bases en PostgreSQL, desde la instalación hasta consultas avanzadas y optimización de rendimiento."
    },
    {
        id: 5,
        src: "/assets/image/ionic.png",
        title: "PostgreSQL",
        description: "Tengo sólidas bases en Ionic. Estoy listo para aplicar mis conocimientos en proyectos."
    }
]