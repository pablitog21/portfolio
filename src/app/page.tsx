'use client'


import { ContacData, ImageData, contacData, imageData } from "@/constants";
import BotonWhatsapp from "@/components/BotonWhatsapp ";
import Footer from "@/components/Footer";
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleDownload = () => {
    const downloadUrl = '/assets/doc/cvc.pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'cvc.doc';
    link.click();
  };

  const handleClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex flex-col min-h-screen p-8 lg:p-24">
      <div className="max-w-5xl mx-auto mb-8 lg:flex lg:justify-between lg:items-center">
        <p className="sticky top-0 left-0 w-full py-8 text-center border-b lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Mi Portafolio
        </p>
      </div>

      <div className="relative flex justify-center mb-8 lg:mb-0">
        <img
          src="/assets/image/foto.png"
          alt="One Icon"
          className="w-80 h-90 max-w-screen-sm "
        />
      </div>

      <div className="lg:text-left">
        <p className="text-lg font-semibold mb-4 text-center">¡Hola! ¡Soy Juan David Marin Zuluaica!</p>
        <p className="text-sm text-gray-500 leading-relaxed text-center">
          Me encanta trabajar en proyectos emocionantes y aprender nuevas tecnologías. En mi tiempo libre, disfruto leyendo noticias sobre el mundo tecnológico y participando en comunidades de programación. También me apasiona compartir conocimientos y ayudar a otros desarrolladores a crecer en sus habilidades. Siempre estoy en busca de nuevas oportunidades para colaborar en proyectos innovadores y desafiantes.
        </p>
      </div>

      <div className="text-center mb-8 p-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="/stack">Mi Stack</a>
        </button>
      </div>

      <div className="text-center mb-8 p-0">
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Descargar CVC
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:text-left p-8">
        {contacData.map((contact: ContacData) => (
          <a
            key={contact.id}
            href={contact.href}
            className="group block px-5 py-4 border rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-semibold mb-2">{contact.title}</h2>
            <p className="text-sm opacity-50">{contact.text}</p>
          </a>
        ))}
      </div>

      {/* Modal de imagen */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50" onClick={handleCloseModal}>
          <div className="relative text-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-w-[90vw] sm:max-w-md mx-auto flex flex-col">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex-grow">
              <img
                src={imageData[selectedImage].src}
                alt={imageData[selectedImage].text}
                className="w-20 h-20 sm:w-auto sm:h-auto mx-auto"
              />
            </div>
            <div>
              <p className="mt-2 text-sm dark:text-white">
                {imageData[selectedImage].text}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {imageData.map((image: ImageData, index: number) => (
          <div
            key={image.id}
            className="text-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors p-4 rounded-lg w-full max-w-[90vw] sm:max-w-md mx-auto cursor-pointer relative"
            onClick={() => handleClick(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-20 h-20 sm:w-auto sm:h-auto"
            />
            <p className="mt-2 text-sm dark:text-white font-semibold">{image.title}</p>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}

