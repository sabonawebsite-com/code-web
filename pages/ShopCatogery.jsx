import React, { useContext } from 'react'
import './ShopCatogery.css'
import './CSS/ShopCatogery.css'
import male_imag from '../components/assets/product_10.png'
import drop_down from '../components/assets/dropdown_icon.png'

import Items from '../components/Items/Items'
import { ShopContext } from '../context/ShopContext'

const ShopCatogery = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-catogery'>
      <img className='banner' src={props.banner} alt="" />
      <div className='shopCatogry-indexSort'>
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className='shopCatagory-sort'>
          sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shop-cat-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
          }
          else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        show more
      </div>
    </div>
  )
}

export default ShopCatogery