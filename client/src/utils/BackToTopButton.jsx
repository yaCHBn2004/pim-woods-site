import React, { useState, useEffect } from 'react';
import arrow from '../assets/icons/arrows/nav-arrow.svg';
import { scrollToTop } from '../hooks/scrollToTop';

const BackToTopButton = () => {
    const [opacity, setOpacity] = useState(0);
    
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / windowHeight) * 100;

        if (scrollPercent > 90) {
            setOpacity(1);
        } else if (scrollPercent > 50) {
            setOpacity((scrollPercent - 70) / 20);
        } else {
            setOpacity(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 transition-transform duration-300 ease-in-out transform hover:scale-125"
            style={{ 
                opacity,
                pointerEvents: opacity >= 0.3 ? 'auto' : 'none' 
            }}
        >
            <img src={arrow} className=' cursor-pointer rotate-180' alt="Back to top arrow" />
        </button>
    );
};

export default BackToTopButton;
