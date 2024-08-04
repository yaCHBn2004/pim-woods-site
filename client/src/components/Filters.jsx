import React from 'react'
import { cats, collec, prices } from '../content/filters'

const Filters = () => {
  return (
    <div className='hidden md:flex flex-col gap-7 lg:w-[400px] lg:w-[700px]'>
      <h1 className='text-3xl font-bold '>Filters</h1>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-gray-950 text-[18px] '>Prices</h1>
        <ul className='text-gray-600 text-xs flex flex-col gap-3 '>
          {prices.map(e => <li className='hover:underline'>{e}</li>)}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-gray-950 text-[18px]'>Categories</h1>
        <ul className='text-gray-600 text-xs flex flex-col gap-3'>
          {cats.map((e, i) => <li className='hover:underline'>{e}</li>)}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-gray-950 text-[18px]'>Collections</h1>
        <ul className='text-gray-600 text-xs flex flex-col gap-3'>
          {collec.map(e => <li className='hover:underline'>{e}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Filters