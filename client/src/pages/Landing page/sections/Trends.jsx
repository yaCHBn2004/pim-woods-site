import React from 'react'
import DesignGallery from './DesignGallery'
import inarrow from "/src/assets/icons/arrows/in-arrow.svg"

export const Trends = () => {
  const Footer = '../../../components/super components/Footer'
  return (
    <div className='h-screen flex flex-col mb-10'>
      <div className=" flex gap-2 pt-24  p-8 h-1/2  ">
        <div className="flex flex-col basis-[70%]  ">
          <h1 className=" text-darkBrown text-6xl font-bold pl-16">
            {" "}
             Artisant  tendance
          </h1>
        </div>
        <div className="felx flex-col w-1/2 font-bold text-darkBrown">
          <p>
            Vous avez des questions ou simplement envie de discuter ?
            Contactez-nous ! Contactez PimWoods par téléphone,
          </p>
          
        </div>
      </div>
      <div className='p-16 mb-2'>
        <DesignGallery />
      </div>
      
      <div className="text-secondary flex align-baseline  gap-2 h-max  hover:ml-4 justify-center">  <a href="#footer" className='font-bold cursor-pointer'>Voir la localisation </a> 
             <img className=""src={inarrow} alt="" /> 

    </div>
    </div>
  )
}
