import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/pim-white.svg';
import NavItems from '../NavItems';
import Hamburger from '../../utils/Hamburger';
import NavElems from '../NavElems';

const Nav = () => {
  const [folded, setFolded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`fixed z-30 p-4 flex w-full justify-between items-center mx-auto text-white transition-all duration-300 ${folded ? 'bg-primary h-12' : 'bg-primary h-16'}`}>
        <Link to={'/'} className='block'>
        <div className='flex items-center gap-1'>
          <img src={logo} className='relative h-14' alt="Logo" />
          <span className={`font-semibold text-lg absolute left-14 transition-all duration-300 ${folded ? 'text-base' : 'text-lg'}`}>PimWoods</span>
        </div>
        </Link>

        {isMobile ? (
          <>
            <div className="z-20">
              <Hamburger isOpen={isMenuOpen} onClick={handleMenuClick} />
            </div>

              <div
                className={`${isMenuOpen ? "max-h-screen" : "-top-8 opacity-0 scale-95"
                  } max-h-max overflow-hidden absolute top-0 left-0 right-0 w-full bg-primary -z-50 flex flex-col gap-4 items-center py-6 px-2 pt-16 shadow-md transition-all duration-100`}
              >
                <NavElems />
              </div>
          </>
        ) :
        <div className={isMobile ? "hidden" : ""}>          
          <NavItems />
        </div>
        }
      </div>
    </>
  );
};

export default Nav;
