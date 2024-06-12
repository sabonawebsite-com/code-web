import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_icon2 from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {

  const { product } = props;
  const { addToCart } = useContext(ShopContext)
  return (
    <div className=' Productdisplay'>
      <div className="Productdisplay-left">
        <div className="Productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />

        </div>
        <div className="Productdisplay-img">

          <img className='Productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="Productdisplay-right">
        <h1>{product.name}</h1>
        <div className="Productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon2} alt="" />s
          <p>(122)</p>
        </div>
        <div className="Productdisplay-right-price">
          <div className="Productdisplay-right-old">
            ${product.old_price}
          </div>
          <div className="Productdisplay-right-new">
            ${product.new_price}  </div>

        </div>
        <div className="Productdisplay-right-discription">
          An ecommerce business is a company that generates revenue from selling products or services online. For example, an ecommerce company might sell software, apparel, housewares, or web design services. You can run an ecommerce business from a single website or through multiple online channels like social media and email.
        </div>
        <div className="Productdisplay-right-size">
          <h1>Select size</h1>
          <div className="Productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className="Productdisplay-right-category"><span>Category:</span>women,t-shirt,crop top</p>
        <p className="Productdisplay-right-category"><span>tags:</span>modern latest </p>
      </div>
    </div>
  )
}

export default ProductDisplay