import React from 'react';
import { stackData } from '@/constants';

const Imagen = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Mi Stack Tecnológico
          </h1>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-1"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Inicio
          </a>
        </div>
      </div>

      {/* Stack Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {stackData.map(image => (
            <div
              key={image.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-center p-6 gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={image.src}
                    alt={`Tecnología ${image.id}`}
                    className="w-32 h-32 object-contain filter dark:brightness-90 transform hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imagen;

