import React from 'react'
import logoBig from '../assets/pim-big-yellowish.png'


const FootLogo = () => {
    return (
        <div className='flex flex-col items-center text-bg font-semibold gap-2'>
            <img src={logoBig} alt="" className=' w-24 h-28' />
            <span>PimWoods</span>
        </div>

    )
}

export default FootLogo