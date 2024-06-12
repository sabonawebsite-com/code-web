// import React from 'react'
// import './Breadcrum.css'
// import arrow_icon from '../assets/breadcrum_arrow.png'
// const Breadcrum = () => {
//   return (
//     <div className='bread-crum'>
//       HOME <img src={arrow_icon} alt="" />
//       SHOP <img src={arrow_icon} alt="" />
//       {/* {product.category} */}
//       <img src={arrow_icon} alt="" />
//       {/* {product.name} */}

//     </div>
//   )
// }

// export default Breadcrum



// import React from 'react'
// import './Breadcrums.css'
// import arrow_icon from '../assets/breadcrum_arrow.png'
// const Breadcrums = (props) => {
//   const { product } = props;
//   return (
//     <div className='breardcrums'>

//       HOME <img src={arrow_icon} alt="" />
//       SHOP <img src={arrow_icon} alt="" />
//       {/* {product.category}  */}
//       <img src={arrow_icon} alt="" />
//       {/* {product.name} */}
//     </div>
//   )
// }

// export default Breadcrums

import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className='breadcrem'>

      HOME <img src={arrow_icon} alt="" />SHOP  <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum