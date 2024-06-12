import React from 'react'
import './RelatedProduct.css'
import data_product from '../assets/data'
import Items from '../Items/Items'

const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
      <h1>Related Product</h1>
      <hr />
      <div className="RelatedProduct-items">
        {data_product.map((item, i) => {
          return <Items key={i} id={item.id} name={item.name} />
        })}
      </div>
    </div>
  )
}

export default RelatedProduct