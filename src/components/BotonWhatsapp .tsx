"use client";

import React, { FormEvent, useState } from "react";

const BotonWhatsapp = () => {
  const [nombre, setNombre] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nombre.length > 150) {
      alert("El nombre no puede exceder los 150 caracteres.");
    } else {
      const mensaje = `Hola, ¿cómo estás? Me gustaría adquirir tus servicios. ¿Podríamos conversar para llegar a un acuerdo? ¡Gracias! Atentamente: ${nombre}.`;
      const mensajeCodificado = encodeURIComponent(mensaje);
      const whatsappURL = `https://api.whatsapp.com/send?phone=573008259490&text=${mensajeCodificado}`;

      window.open(whatsappURL, "_blank");

      // Cerrar el formulario
      setShowInput(false);
      setNombre("");
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <img
        src="/assets/icons/whatsapp-icon.png"
        alt="WhatsApp"
        className="w-12 h-12 cursor-pointer animate-pulse"
        onClick={handleClick}
        style={{ animationDuration: "2s" }} // Personalizar la duración de la animación
      />
      {showInput && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 shadow-lg rounded">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              maxLength={150} // Usar un número en lugar de una cadena
              className="block w-48 p-1 border rounded mr-2"
              style={{ color: "#333" }} // Cambiar el color del texto de entrada
              placeholder="Ingresa tu nombre"
            />
            <button
              type="submit"
              className="p-1 bg-blue-500 text-white rounded"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BotonWhatsapp;
