import React from 'react'
import logo from "../../assets/logo-pim.png"
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' fixed z-30 bg-primary p-4 flex w-full justify-between items-center mx-auto text-text-white'>

      <div className='flex items-center '>
        <img src={logo} className='relative' alt="" />
        <span className=' font-semibold text-lg absolute left-[4.5rem]'>PimWoods</span>
      </div>

      <NavItems />
    </div>
  )
}

export default Nav

function NavItems() {
  const location = useLocation();
  return (
    <nav className=" pr-5 text-sm">
      <div className="flex mx-auto">
        <ul className="flex gap-5 justify-around">
          <li>
            <Link exact to="/" className={`cursor-pointer p-3 ${location.pathname === '/' ? 'text-white font-medium' : ''}`}>Accueil</Link>
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
  )
}