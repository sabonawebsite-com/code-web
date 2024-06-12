import React from 'react'
import './NewsLetters.css'
const NewsLetters = () => {
  return (
    <div className='Newsletters'>
      <h1>Get Exclusive Offers on your email</h1>
      <p>Subscribe Our Letter to stay Update</p>
      <div>
        <input type="email" placeholder='enter your email' />
        <button>Subscribe </button>
      </div>
    </div>
  )
}

export default NewsLetters