import React, { useState, useEffect } from 'react';
import arrow from '../assets/icons/arrows/nav-arrow.svg'

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / windowHeight) * 100;

        if (scrollPercent > 70) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 transition duration-300"
                >
                    <img src={arrow} className=' cursor-pointer rotate-180' alt="" />
                </button>
            )}
        </>
    );
};

export default BackToTopButton;
