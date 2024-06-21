import React from 'react'
import DesignGallery from '../../../components/DesignGallery'
import SeeMore from '../../../components/SeeMore'


export const Trends = () => {
  return (
    <div className='h-max flex flex-col gap-[3.5rem] px-16 my-16'>

      <div className="flex basis-[100%] ">
        <div className="flex flex-col justify-end basis-[60%]  ">
          <h1 className=" text-darkBrown text-6xl font-bold">
            Artisant  tendance
          </h1>
        </div>
        <div className=" basis-[40%] font-bold text-darkBrown">
          <p className=' leading-7'>
            Vous avez des questions ou simplement envie de discuter ?
            Contactez-nous ! Contactez PimWoods par téléphone,
          </p>
        </div>
      </div>


      <div className='flex flex-col items-center gap-[2rem] mb-2'>
        <DesignGallery />
        <SeeMore />
      </div>
    </div>
  )
}
