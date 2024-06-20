import React from 'react'
import Socials from '../Socials'
import NavElems from '../NavElems'
import FootLogo from '../FootLogo'
import Contacts from '../Contacts'
import Map from '../Map'

const Footer = () => {
  return (
    <div className='bg-darkBrown flex flex-col '>
      <div className=' p-12 md:max-lg:p-6 flex justify-between text-bg'>
        <FootLogo />

        <div className=' flex flex-col gap-5 mx-[2rem] items-start'>
          <h3 className='font-medium'>Informations</h3>
          <NavElems />
          <Socials />
        </div>

        <div className=' flex flex-col gap-5 ml-[3rem] items-start'>
          <h3 className='font-medium'>Contacts</h3>
          <Contacts />
        </div>

        <div><Map /></div>

      </div>

      <span className=' text-center py-4 border-t border-t-light-text text-[0.63rem] font-semibold text-light-text paragraph'>
      © 2024 All Rights Reserved
      </span>
      </div>
  )
}

export default Footer
