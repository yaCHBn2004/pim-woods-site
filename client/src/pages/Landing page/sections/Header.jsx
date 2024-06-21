import React from 'react'
import arrowIn from "../../../assets/icons/arrows/call-arrow.svg"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <div className=' text-white gap-[1.5rem] phone:max-md:gap-[1.2rem] pt-32 phone:max-lg:pt-24 flex flex-col items-center '>
        <h1 className=' text-6xl phone:max-md:text-4xl phone:max-md:w-[65%] font-medium w-[50%]'>Timeless Solid Crafts </h1>
        <div className=" flex flex-col items-center text-center px-4 phone:max-md:w-[65%] md:w-[40%]">
          <p className=' text-[0.81rem] phone:max-md:text-[0.7rem] font-light pararaph'>Rendez votre maison confortable avec notre gamme exclusive de meubles luxueux conçus pour le confort, l'élégance et l'entretien.</p>
          <p className=' text-[0.81rem] phone:max-md:text-[0.7rem] font-light pararaph'></p>
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
    <div className='header-accessory phone:max-md:py-1.5 absolute bottom-0 w-[65%] phone:max-md:w-full bg-secondary text-white py-5'>
      <div className='flex items-center phone:max-md:grid phone:max-md:grid-cols-2 px-5 gap-3 md:max-lg:gap-6 phone:max-md:py-2'>
        <div className='flex flex-col justify-center basis-[25%] border-r-2 px-3'>
          <span className='paragraph font-light text-sm md:max-lg:text-xs phone:max-md:text-[0.67rem] min-w-max'>Années d'expertise:</span>
          <h2 className=' font-medium text-4xl phone:max-md:text-3xl'>+20</h2>
        </div>

        <div className=' flex flex-col justify-center basis-[25%] md:border-r-2 px-3'>
          <span className='paragraph font-light text-sm md:max-lg:text-xs phone:max-tablet:text-[0.67rem] min-w-max'>Évaluation des clients:</span>
          <h2 className=' font-medium text-4xl phone:max-tablet:text-3xl'>4.9</h2>
        </div>

        <div className='flex flex-col justify-center items-start basis-[50%] text-[0.8rem] phone:max-md:col-span-2 phone:max-md:grid phone:max-tablet:items-center phone:max-tablet:text-center text-left px-3'>
          <span className='paragraph '>Se concentrant sur la durabilité, la solidité et le confort pour vous aider à créer votre maison de rêve </span>
        </div>
      </div>

    </div>
  )
}
