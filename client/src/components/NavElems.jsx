import React from 'react'
import { Link } from 'react-router-dom'

const NavElems = () => {
    return (
        <>
            <Link exact to="/" className={`cursor-pointer text-sm`}>Accueil</Link>
            <Link to="/products" className={`cursor-pointer text-sm `}>Nos produits</Link>
            <Link to="/contact" className={`cursor-pointer text-sm `}>Contactez-nous</Link>
        </>
    )
}

export default NavElems