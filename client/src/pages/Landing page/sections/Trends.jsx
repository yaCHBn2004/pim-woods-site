import React from 'react'
import DesignGallery from '../../../components/DesignGallery'
import SeeMore from '../../../components/SeeMore'


export const Trends = () => {
  return (
    <div className='h-max flex flex-col gap-[3.5rem] px-16 my-16'>

      <div className="flex basis-[100%] ">
        <div className="flex flex-col justify-end basis-[50%]  ">
          <h1 className=" text-darkBrown text-6xl font-bold w-[90%]">
            Artisant  tendance
          </h1>
        </div>
        <div className=" basis-[50%] font-bold text-darkBrown">
          <p className=' leading-7'>
            Découvrez nos meubles en bois modernes. Ils sont élégants et faits à la main. Chaque pièce est unique et contemporaine, idéale pour votre maison. Nos meubles apportent une touche spéciale et durable à votre espace
          </p>
        </div>
      </div>


      <div className='flex flex-col items-center gap-[1.2rem] mb-2'>
        <DesignGallery />
        <SeeMore />
      </div>
    </div>
  )
}
