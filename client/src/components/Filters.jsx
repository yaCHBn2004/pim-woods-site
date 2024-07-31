import React from 'react'
import { cats, collec, prices } from '../content/filters'

const Filters = () => {
  return (
    <div>
         <h1>Filters</h1>
          <div>
            <h1>Prices</h1>
            <ul>
              {prices.map(e => <li>{e}</li>)}
            </ul>
          </div>
          <div>
            <h1>Categories</h1>
            <ul>
              {cats.map((e, i) => <li>{e}</li>)}
            </ul>
          </div>
          <div>
            <h1>Collections</h1>
            <ul>
              {collec.map(e => <li>{e}</li>)}
            </ul>
          </div>
    </div>
  )
}

export default Filters