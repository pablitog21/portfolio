import React from 'react';
import { stackData } from '@/constants';

const Imagen = () => {
  return (
    <div>
      <div className="text-start mb-8 p-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="/">Atras</a>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {stackData.map(image => (
          <div
            key={image.id}
            className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors p-4 rounded-lg w-full max-w-[90vw] sm:max-w-md mx-auto cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <img
                key={image.id}
                src={image.src}
                alt={`Imagen ${image.id}`}
                className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-4 my-4"
                style={{ width: '200px', height: 'auto' }}
              />
              <p className="text-sm font-semibold">{image.description}</p>
            </div>
          </div>
        ))}
      </div>


    </div>

  );
};

export default Imagen;
