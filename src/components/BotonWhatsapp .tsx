'use client'

import React, { useState } from 'react';

const BotonWhatsapp = () => {

    const handleClick = () => {

        const mensaje = encodeURIComponent('"¡Hola! Estoy muy bien, gracias por preguntar. Me gustaría adquirir tus servicios. ¿Podríamos programar una reunión para llegar a un acuerdo? ¡Gracias!"');

        const whatsappURL = `https://api.whatsapp.com/send?phone=573167251967&text=${mensaje}`;

        window.open(whatsappURL, '_blank');
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