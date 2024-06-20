import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo-pim.png';

const Nav = () => {
  const [folded, setFolded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setFolded(true);
      } else {
        setFolded(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed z-30 p-4 flex w-full justify-between items-center mx-auto text-white transition-all duration-300 ${folded ? 'bg-primary h-12' : 'bg-primary h-16'}`}>
      <Link to={'/'} className='flex items-center p-1'>
        <img src={logo} className='relative h-8' alt="Logo" />
        <span className={`font-semibold text-lg absolute left-20 transition-all duration-300 ${folded ? 'text-base' : 'text-lg'}`}>PimWoods</span>
      </Link>
      <NavItems />
    </div>
  );
};

export default Nav;

function NavItems() {
  const location = useLocation();
  return (
    <nav className="pr-5 text-sm">
      <div className="flex mx-auto">
        <ul className="flex gap-5 justify-around">
          <li>
            <Link to="/" className={`cursor-pointer p-3 ${location.pathname === '/' ? 'text-white font-medium' : ''}`}>Accueil</Link>
          </li>
          <li>
            <Link to="/products" className={`cursor-pointer p-3 ${location.pathname === '/products' ? 'text-white font-medium' : ''}`}>Nos productions</Link>
          </li>
          <li>
            <Link to="/contact" className={`cursor-pointer p-3 ${location.pathname === '/contact' ? 'text-white font-medium' : ''}`}>Contactez-nous</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
