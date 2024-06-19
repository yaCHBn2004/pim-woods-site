import React from 'react'
import Linkedin from "../assets/icons/socials/in.svg"
import fb from "../assets/icons/socials/facebook.svg"
import x from "../assets/icons/socials/x.svg"

const Socials = () => {
    return (
        <div className='flex flex-col gap-4 text-bg font-semibold'>
            <span>Social Media</span>
            <div className='flex gap-8'>
                <a href=""><img src={fb} alt="" /></a>
                <a href=""><img src={x} alt="" />  </a>              
                <a href=""><img src={Linkedin} alt="" /></a>
            </div>
        </div>
    )
}

export default Socials