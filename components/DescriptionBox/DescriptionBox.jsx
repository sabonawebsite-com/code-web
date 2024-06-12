import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>

      <div className="DescriptionBox-navigetor">\
        <div className="DescriptionBox-nav-box"> Description </div>
        <div className="DescriptionBox-fade "> Reviwes(122) </div>

      </div>
      <div className="Description-description">
        <p>Increased Reach and Sales: E-commerce allows businesses to bypass geographical limitations and reach a global audience, expanding their customer base and sales potential.
          Innovation: The competitive nature of online business fosters innovation in areas like payment systems, logistics, and marketing strategies.
          Efficiency and Cost Savings: E-commerce can streamline operations, reduce overhead costs associated with physical stores, and improve efficiency in areas like inventory management.</p>

        <p>Convenience and Wider Selection: E-commerce offers a convenient shopping experience, allowing purchases from anywhere, anytime. Consumers also benefit from a wider variety of products not limited by physical store inventory.
          Comparison Shopping and Competitive Prices: Online platforms enable easy price comparison between retailers, potentially leading to better deals for consumers.</p>
      </div>
    </div>
  )
}

export default DescriptionBox