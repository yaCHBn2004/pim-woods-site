import React from 'react'
import arrowIn from "../../../assets/icons/arrows/call-arrow.svg"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <div className=' text-white gap-[1.5rem] pt-32 md:pt-24 flex flex-col items-center '>

        <h1 className=' text-6xl font-medium w-[50%]'>Timeless Solid </h1>
        <h1 className=' text-6xl font-medium w-[50%]'>Crafts </h1>
        <div>
        <p className=' text-[0.81rem]  font-light pararaph'>Rendez votre maison confortable avec notre gamme exclusive de</p>
        <p className=' text-[0.81rem]  font-light pararaph'>meubles luxueux conçus pour le confort, l'élégance et l'entretien.</p>
        </div>
        

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
    <div className=' md:max-lg:py-1.5 absolute bottom-0 w-[65%] bg-secondary text-white py-5'>
      <div className='flex items-center px-5 gap-3 md:max-lg:gap-6'>
          <div className='basis-[25%] border-r-2 pr-3'>
            <span className='paragraph font-light text-sm md:max-lg:text-xs'>Années d'expertise:</span>
            <h2 className=' font-medium text-4xl'>+20</h2>
          </div>

          <div className='basis-[25%] border-r-2 pr-3'> 
            <span className='paragraph font-light text-sm md:max-lg:text-xs'>Évaluation des clients:</span>
            <h2 className=' font-medium text-4xl'>4.9</h2>
          </div>

          <div className='flex flex-col justify-center items-start basis-[50%] text-left'> 
            <span className='paragraph text-[0.8rem] md:max-lg:text-[0.6rem]'>Se concentrant sur la durabilité, la solidité et le confort  </span>
            <span className='paragraph text-[0.8rem] md:max-lg:text-[0.6rem]'>pour vous aider à créer votre maison de rêve </span>
          </div>
      </div>
      
    </div>
  )
}
