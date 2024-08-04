import React from 'react'
import search from '../assets/icons/arrows/search.svg'
import left from '../assets/icons/arrows/left-arrow.svg'
import right from '../assets/icons/arrows/right-arrow.svg'
const SearchBar = () => {
    return (
        <div className='p-4 flex gap-5 '>
            <div className='  w-[90%] flex items-center justify-around rounded-3xl px-4  bg-white hover:border-b-yellow-950'>
                <input type="text" placeholder='Type to search ' className='w-full p-3   bg-transparent border-spacing-6 border-none   placeholder-orange-950' />
                <img src={search} className='size-7 ' />
            </div>
            <div className='flex gap-5 w-5'>
                <img src={left} className='hover:scale-105' />
                <img src={right} className='hover:scale-105' />
            </div>

        </div>
    )
}

export default SearchBar