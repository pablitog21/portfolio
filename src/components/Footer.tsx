import React from 'react';

const Footer = () => {
    // Determinar el modo de color del sistema
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <footer className={`bg-${darkMode ? 'gray-900' : 'gray-800'} text-white p-4 mt-auto rounded-xl`}>
            <div className="container mx-auto flex justify-center items-center">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-center mb-2">
                        <a>Contáctanos</a>
                        <p className="text-sm">Email: example@example.com</p>
                    </div>
                    <div className="flex flex-col items-center mb-2">
                        <a>Síguenos en</a>
                        <div className="flex mt-2">
                            <a href="https://www.instagram.com/pablitog_21/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/icons/instagram-icon.png" alt="Instagram" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className={`text-center text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>&copy; {new Date().getFullYear()} Pablito</p>
        </footer>
    );
};

export default Footer;
