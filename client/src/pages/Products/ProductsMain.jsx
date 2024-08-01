import React from 'react'
import Filters from '../../components/Filters'
import Products from '../../components/Products'

const ProductsMain = () => {
  return (
    <div >
      <h1>Our Products</h1>
      <section>
        <Filters/>
        <Products/>
      </section>
    </div>
  )
}

export default ProductsMain