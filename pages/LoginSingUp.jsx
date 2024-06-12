import React from 'react'
import './LoginSingUp.css'
const LoginSingUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-contener">
        <h1>Sing Up</h1>
        <div className="loginsignup-filed">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Your email' />
          <input type="password" placeholder='Your password' />
        </div>
        <button>continue</button>
        <p className="loginsignup-login">Already Have an account<span>login here </span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' className='check' />
          <p>continue to agree to our privacy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingUp