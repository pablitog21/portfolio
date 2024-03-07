'use client'
import BotonWhatsapp from "@/components/BotonWhatsapp ";
import Image from "next/image";


import { useState } from 'react';

export default function Home() {
  const [hovered, setHovered] = useState(false);

  const handleDownload = () => {
    const downloadUrl = '/assets/doc/cvc.doc';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'cvc.doc';
    link.click();
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <main className="flex flex-col min-h-screen p-8 lg:p-24">
      <div className="max-w-5xl mx-auto mb-8 lg:flex lg:justify-between lg:items-center">
        <p className="fixed top-0 left-0 w-full py-8 text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Mi Portafolio
        </p>
      </div>

      <div className="relative flex justify-center mb-8 lg:mb-0">
        <img
          src="/assets/icons/four-icon.png"
          alt="One Icon"
          className={`w-full h-full max-w-screen-sm ${
            hovered ? 'lg:max-w-lg' : 'lg:max-w-xl'
          } transition-all duration-500 ease-in-out ${
            hovered ? 'scale-110' : 'scale-100'
          }`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />
      </div>

      <div className="text-center lg:text-left">
        <p className="text-lg font-semibold mb-4">¡Hola! ¡Soy Juan David Marin Zuluaica!</p>
        <p className="text-sm text-gray-500 leading-relaxed">
          Me encanta trabajar en proyectos emocionantes y aprender nuevas tecnologías. En mi tiempo libre, disfruto explorar las últimas tendencias en desarrollo de software y participar en comunidades de programación. También me apasiona compartir conocimientos y ayudar a otros desarrolladores a crecer en sus habilidades. Siempre estoy buscando nuevas oportunidades para colaborar en proyectos innovadores y desafiantes.
        </p>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Descargar CVC
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
        <a
          href="https://github.com/pablitog21"
          className="group block px-5 py-4 border rounded-lg transition-colors hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold mb-2">GitHub</h2>
          <p className="text-sm opacity-50">Mi perfil de GitHub</p>
        </a>

        <a
          href="https://www.instagram.com/pablitog_21"
          className="group block px-5 py-4 border rounded-lg transition-colors hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold mb-2">Instagram</h2>
          <p className="text-sm opacity-50">Mi perfil de Instagram</p>
        </a>

        <a
          href="https://www.linkedin.com/in/juan-david-mar%C3%ADn-zuluaica-5339a820b"
          className="group block px-5 py-4 border rounded-lg transition-colors hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold mb-2">LinkedIn</h2>
          <p className="text-sm opacity-50">Mi perfil de LinkedIn</p>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg w-full max-w-[90vw] sm:max-w-md mx-auto">
          <img
            src="/assets/icons/two-icon.png"
            alt="Descripción de la imagen"
            className="w-20 h-20 sm:w-auto sm:h-auto"
          />
          <p className="mt-4 text-base dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cum dolorum impedit doloremque libero repellendus ad rem excepturi quae fugiat ea nihil atque accusantium placeat et doloribus in! Dolorem, voluptates.</p>
        </div>
        <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg w-full max-w-[90vw] sm:max-w-md mx-auto">
          <img
            src="/assets/icons/two-icon.png"
            alt="Descripción de la imagen"
            className="w-20 h-20 sm:w-auto sm:h-auto"
          />
          <p className="mt-4 text-base dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cum dolorum impedit doloremque libero repellendus ad rem excepturi quae fugiat ea nihil atque accusantium placeat et doloribus in! Dolorem, voluptates.</p>
        </div>
      </div>
    </main>
  );
}
