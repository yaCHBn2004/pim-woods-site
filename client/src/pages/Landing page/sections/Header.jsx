import React from 'react'
import arrowIn from "../../../assets/icons/arrows/call-arrow.svg"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <div className=' text-white gap-[1.5rem] py-20 flex flex-col items-center '>

        <h1 className=' text-7xl font-medium w-[50%]'>Timeless Solid Crafts</h1>
        <p className=' text-sm w-[40%] font-light pararaph'>Rendez votre maison confortable avec notre gamme exclusive de meubles luxueux conçus pour le confort, l'élégance et l'entretien.</p>

        <Link to={"/products"} className='call-btn'>
          <span>Découvrez nos produits</span>
          <img src={arrowIn} alt="" />
        </Link>
      </div>
      <HeaderAccessory />

    </div>
  )
}


function HeaderAccessory() {
  return (
    <div className='absolute bottom-0 w-[65%] bg-secondary text-white py-5'>
      <div className='flex px-5 gap-3'>
          <div className='basis-[25%] border-r-2 '>
            <span className='paragraph font-light text-sm'>Années d'expertise:</span>
            <h2 className=' font-medium text-4xl'>+20</h2>
          </div>

          <div className='basis-[25%] border-r-2'> 
            <span className='paragraph font-light text-sm'>Évaluation des clients:</span>
            <h2 className=' font-medium text-4xl'>4.9</h2>
          </div>

          <div className='basis-[50%]'> 
            <span className='paragraph text-[0.8rem]'>Se concentrant sur la durabilité, la solidité et le confort pour vous aider à créer votre maison de rêve</span>
          </div>

      </div>
      
    </div>
  )
}
