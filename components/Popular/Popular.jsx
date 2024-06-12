import React from 'react'
import './Popular.css'
import Items from '../Items/Items'
import data_product from '../assets/data'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in women</h1>
      <hr />
      <div className='popular-items'>
        {data_product.map((item, i) => {
          return (<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
        })}
      </div>
    </div>
  )
}

export default Popular