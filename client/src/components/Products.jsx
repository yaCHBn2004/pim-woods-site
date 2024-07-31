import React from 'react'
import { woodenFurniture } from '../content/productDetail'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div>
       {woodenFurniture.map(item => <ProductCard item={item}/>)}
    </div>
  )
}

export default Products