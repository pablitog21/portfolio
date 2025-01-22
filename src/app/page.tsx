"use client";

import { ContacData, ImageData, contacData, imageData } from "@/constants";
import BotonWhatsapp from "@/components/BotonWhatsapp ";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleDownload = () => {
    const downloadUrl = "/assets/doc/cvc.pdf";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "cvc.doc";
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
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header con animación de fade in */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-800 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Mi Portafolio
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 mt-20 px-4 py-12 sm:px-6 lg:px-8">
        {/* Profile Section con animación */}
        <section className="max-w-4xl mx-auto mb-16 animate-slideDown">
          <div className="relative mb-8">
            <img
              src="/assets/image/foto.png"
              alt="Foto de perfil"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg ring-4 ring-white dark:ring-gray-800 animate-fadeIn hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="text-center space-y-4 animate-slideUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              ¡Hola! ¡Soy Juan David Marin Zuluaica! (Pablito)
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Me encanta trabajar en proyectos emocionantes y aprender nuevas
              tecnologías. En mi tiempo libre, disfruto leyendo noticias sobre el
              mundo tecnológico y participando en comunidades de programación.
            </p>
          </div>

          {/* Action Buttons con animación */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-slideUp delay-200">
            <a
              href="/stack"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Mi Stack
            </a>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descarga mi CV
            </button>
          </div>
        </section>

        {/* Contact Grid con animación */}
        <section className="max-w-7xl mx-auto mb-16 animate-fadeIn delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacData.map((contact: ContacData, index) => (
              <a
                key={contact.id}
                href={contact.href}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slideIn"
                style={{ animationDelay: `${index * 100}ms` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {contact.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{contact.text}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Projects Grid con animación */}
        <section className="max-w-7xl mx-auto animate-fadeIn delay-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageData.map((image: ImageData, index: number) => (
              <div
                key={image.id}
                onClick={() => handleClick(index)}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer animate-slideIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-200"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal con animación */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div className="relative text-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-w-[90vw] sm:max-w-md mx-auto flex flex-col animate-scaleIn">
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

      <Footer />
    </main>
  );
}
