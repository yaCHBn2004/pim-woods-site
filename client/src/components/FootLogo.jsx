import React from 'react'
import logoBig from '../assets/logo-PIM-big.png'


const FootLogo = () => {
    return (
        <div className='flex flex-col items-center text-text-white font-semibold gap-2'>
            <img src={logoBig} alt="" />
            <span>PimWoods</span>
        </div>

    )
}

export default FootLogo