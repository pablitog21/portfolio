import React from 'react';

const Footer = () => {
    return (
        <footer className="p-6 mt-auto bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 animate-fadeIn">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-8">
                    <div className="flex flex-col items-center space-y-3 animate-slideUp">
                        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            Contáctame
                        </h3>
                        <a 
                            href="mailto:juandavid.2035@gmail.com"
                            className="group text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1"
                        >
                            <svg 
                                className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="relative">
                                juandavid.2035@gmail.com
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </a>
                    </div>
                    <div className="flex flex-col items-center space-y-3 animate-slideUp" style={{ animationDelay: '200ms' }}>
                        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            Síguenos en
                        </h3>
                        <div className="flex gap-4">
                            <a 
                                href="https://www.instagram.com/pablitog_21/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
                            >
                                <img 
                                    src="/assets/icons/instagram-icon.png" 
                                    alt="Instagram" 
                                    className="w-8 h-8 animate-pulse hover:animate-none" 
                                    style={{ animationDuration: '3s' }}
                                />
                                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs whitespace-nowrap">
                                    Sígueme
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-700 pt-4 animate-fadeIn" style={{ animationDelay: '400ms' }}>
                    <p className='text-center text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>
                        &copy; {new Date().getFullYear()} Pablito. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
