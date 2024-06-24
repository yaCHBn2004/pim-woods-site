import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItems = () => {
    const location = useLocation();
    return (
        <nav className="pr-5 text-sm">
            <div className="flex mx-auto">
                <ul className="flex gap-5 justify-around">
                    <li>
                        <Link to="/" className={`cursor-pointer p-3 ${location.pathname === '/' ? 'text-white font-medium' : ' text-text-white opacity-80'}`}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/products" className={`cursor-pointer p-3 ${location.pathname === '/products' ? 'text-white font-medium' : ' text-text-white opacity-80'}`}>Nos productions</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`cursor-pointer p-3 ${location.pathname === '/contact' ? 'text-white font-medium' : ' text-text-white opacity-80'}`}>Contactez-nous</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavItems