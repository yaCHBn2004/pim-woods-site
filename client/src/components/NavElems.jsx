import React from 'react'
import { Link } from 'react-router-dom'

const NavElems = () => {
    return (
        <>
            <Link exact to="/" className={`cursor-pointer text-[0.82rem]`}>Accueil</Link>
            <Link to="/products" className={`cursor-pointer text-[0.82rem] `}>Nos produits</Link>
            <Link to="/contact" className={`cursor-pointer text-[0.82rem] `}>Contactez-nous</Link>
        </>
    )
}

export default NavElems