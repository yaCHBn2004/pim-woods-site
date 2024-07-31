import React from 'react'
import Filters from '../../components/Filters'
import Products from '../../components/Products'

const ProductsMain = () => {
  return (
    <div className='bg-red-300'>
      <h1>Our Products</h1>
      <section>
        <Filters/>
        <Products/>
      </section>
    </div>
  )
}

export default ProductsMain