export interface ImageData{
    id: number;
    src: string;
    title: string;
    text: string;
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
