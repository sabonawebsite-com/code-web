import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const [cartItem, all_product, removeFromCart] = useContext(ShopContext);

  return (
    <div className='cartItems'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
        <hr />
      </div>

      {all_product.map((product) => (
        cartItem[product.id] > 0 && ( // Conditionally render only products with quantity > 0
          <div key={product.id} className='cartItems-format'> {/* Add key for each item */}
            <img src={product.image} alt="" className='cartitom-product-icon' />
            <p>{product.name}</p>
            <p>${product.new_price}</p>
            <button className='cartitems-quantity'>{cartItem[product.id]}</button>
            <p>{e.new_price * cartItem[product.id]}</p> {/* Replace 'e' with 'product' for clarity */}
            <img src={remove} alt="" onClick={() => removeFromCart(product.id)} />
          </div>
        )
      ))}

      <hr />
    </div>
  );
};

export default CartItems;