import React from 'react'



const ProductCard = ({ item }) => {
  return (
    <div className='card max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl flex flex-col'>
      <div className='bg-slate-800  h-[66%]'>
        <img src={item.img} className='h-full w-full object-cover' />
        <h1 className='absolute top-0 right-0 bg-orange-900  text-bg rounded-lg p-2' >{item.place}</h1>
      </div>
      <div className='flex items-center h-[34%]   px-5'>
        <div className='basis-[66%]'>
          <h1 className='text-[18px] font-bold '>{item.title}</h1>
          <p className='text-orange-800 text-[12px]'>{item.description}</p>
        </div>
        
          <h2 className=' basis-[34%] text-center text-xl font-bold'>{item.price}</h2>
        
      </div>
    </div>
  )
}

export default ProductCard