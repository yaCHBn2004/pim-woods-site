import React from 'react'
import img from '../../../assets/images/contact.jpg'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className=' p-9 flex text-center justify-center text-xl leading-9 bg-secondary text-light-text-2 '>
        <p className='paragraph text-center w-[65%]'>
          De la chambre à la cuisine, nous concevons tout ce que vous souhaitez ajouter à votre maison, avec qualité et solidité garanties.
        </p>
      </div>

      <div className='flex h-full'>
        <div className='flex flex-col basis-[70%] p-8 gap-8'>
          <h1 className=' text-darkBrown text-5xl font-bold'>Contactez-nous!</h1>
          <p className=' paragraph text-sm xl:text-base xl:leading-loose text-darkBrown leading-7 md:max-lg:leading-5 w-[90%]'>Vous avez des questions ou simplement envie de discuter ? Contactez-nous ! Contactez PimWoods par téléphone, e-mail ou réseaux sociaux, ou passez nous rendre visite dans notre atelier. Votre expérience avec notre mobilier nous importe, et nous sommes là pour la rendre exceptionnelle.</p>

          <div className=''>
            <Link to="/contact" className=' font-semibold rounded-full text-bg bg-secondary py-2.5 px-5 text-sm cursor-pointer'>
              Prenez contact
            </Link>
          </div>
        </div>
        <div className=' bg-cover w-[50%] h-full' style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </div>
  )
}

