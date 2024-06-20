import React from 'react'
import loc from "../assets/icons/contacts/location.svg"
import mail from "../assets/icons/contacts/mail.svg"
import phone from "../assets/icons/contacts/phone.svg"

const Contacts = () => {
    return (
        <>
            <span className='flex gap-4 text-[0.75rem] items-start  w-[80%]'>
                <img src={loc} className='mt-1' alt="" />
                <p className=''>89, Rue des roses, Hydra Alger, Algerie</p>
            </span>
            <span className='flex gap-4 items-center text-[0.75rem] w-[80%]'> <img src={phone} alt="" />
                <div className=' flex flex-col'>
                    <p>+213 550 55 55 55</p> <p>+213 23 33 33 33 </p>
                </div>
            </span>

            <a href="mailto:contact@pimwoods.com">    
            <span className='flex gap-4 items-center text-[0.75rem] w-[80%]'>
                <img src={mail} alt="" /> 
                <p>contact@pimwoods.com</p> 
            </span>
            </a>
        </>
    )
}

export default Contacts