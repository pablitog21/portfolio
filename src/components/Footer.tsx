import React from 'react';

const Footer = () => {
    return (
        <footer className="p-4 mt-auto rounded-xl  bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <div className="container mx-auto flex justify-center items-center">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-center mb-2">
                        <a>Contáctame</a>
                        <p className="text-sm">Email: example@example.com</p>
                    </div>
                    <div className="flex flex-col items-center mb-2">
                        <a >Síguenos en</a>
                        <div className="flex mt-2">
                            <a href="https://www.instagram.com/pablitog_21/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/icons/instagram-icon.png" alt="Instagram" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-xs'>&copy; {new Date().getFullYear()} Pablito</p>
        </footer>
    );
};

export default Footer;
