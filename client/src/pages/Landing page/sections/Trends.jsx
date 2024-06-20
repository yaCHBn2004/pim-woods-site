import React from 'react'
import DesignGallery from '../../../components/DesignGallery'
import SeeMore from '../../../components/SeeMore'


export const Trends = () => {
  return (
    <div className='h-max flex flex-col gap-[4.5rem] px-16 my-16'>

      <div className="flex items-end">
        <div className="flex flex-col basis-[60%]  ">
          <h1 className=" text-darkBrown text-6xl font-bold">
            Artisant  tendance
          </h1>
        </div>
        <div className="  basis-[40%] font-bold text-darkBrown">
          <p className=' leading-7'>
            Vous avez des questions ou simplement envie de discuter ?
            Contactez-nous ! Contactez PimWoods par téléphone,
          </p>
        </div>
      </div>


      <div className='flex flex-col gap-[2rem] mb-2'>
        <DesignGallery />
        <SeeMore />
      </div>
    </div>
  )
}
