import React from 'react'
import { woodenFurniture } from '../content/productDetail'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='flex flex-wrap gap-4 p-4'>
       {woodenFurniture.map(item => <ProductCard item={item}/>)}
    </div>
  )
}

export default Products