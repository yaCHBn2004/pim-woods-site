import React from 'react'



const ProductCard = ({item}) => {
  return (
    <div>
      <div>
         <img src={item.img}/>
         <h1 >{item.place}</h1>
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <h2>{item.price}</h2>
      </div>
    </div>
  )
}

export default ProductCard