'use client'

import React, { useState } from 'react';

const BotonWhatsapp = () => {
    const handleClick = () => {
        const nombre = prompt('Hola, por favor dijita tu nombre:');

        if (nombre) {
            if (nombre.length > 150) {
                alert('El nombre no puede exceder los 150 caracteres.');
            } else {
                const mensaje = `Hola, ¿cómo estás? Me gustaría adquirir tus servicios. ¿Podríamos programar una reunión para llegar a un acuerdo? ¡Gracias! Atentamente: ${nombre}.`;
                const mensajeCodificado = encodeURIComponent(mensaje);

                const whatsappURL = `https://api.whatsapp.com/send?phone=570000000000&text=${mensajeCodificado}`;

                window.open(whatsappURL, '_blank');
            }
        } else {
            alert('No se ingresó ningún nombre.');
        }
    };

    return (
        <img
            src="/assets/icons/whatsapp-icon.png"
            alt="WhatsApp"
            className="fixed bottom-5 right-5 w-12 h-12 cursor-pointer animate-pulse"
            onClick={handleClick}
            style={{ animationDuration: '2s' }} // Personalizar la duración de la animación
        />
    );
};


export default BotonWhatsapp;
