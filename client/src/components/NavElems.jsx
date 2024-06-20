import React from 'react'
import { Link } from 'react-router-dom'

const NavElems = () => {
    return (
        <>
            <Link exact to="/" className={`cursor-pointer text-[0.75rem]`}>Accueil</Link>
            <Link to="/products" className={`cursor-pointer text-[0.75rem] `}>Nos produits</Link>
            <Link to="/contact" className={`cursor-pointer text-[0.75rem] `}>Contactez-nous</Link>
        </>
    )
}

export default NavElems