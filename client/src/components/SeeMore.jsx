import React from 'react'
import inarrow from "../assets/icons/arrows/in-arrow.svg"


const SeeMore = () => {
    return (
        <div className="text-secondary flex items-center cursor-pointer gap-2 min-w-max justify-center">
            <p className='text-xl font-bold'>Voir plus</p>
            <img src={inarrow} alt="" />
        </div>)
}

export default SeeMore