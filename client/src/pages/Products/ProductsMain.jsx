import React from 'react'
import Filters from '../../components/Filters'
import Products from '../../components/Products'
import SearchBar from '../../components/SearchBar'

const ProductsMain = () => {
  return (
    <div className='m-10 my-24 flex flex-col gap-8' >
      <h1 className='font-bold text-6xl '>Our Products</h1>
      <section className='flex'>
        <Filters />
        <div className=''>
        <SearchBar/>
        <Products />
        </div>
        
      </section>
    </div>
  )
}

export default ProductsMain