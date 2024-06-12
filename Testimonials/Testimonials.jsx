import React, { useRef } from 'react'
import './Testimonials.css'
import backIcon from '../../assets/back-icon.png'
import nextIcon from '../../assets/next-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
const Testmonials = () => {
  const slider = useRef()
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='testmonials'>
      <img src={backIcon} alt="" className='back-ico' onClick={slideForward} />
      <img src={nextIcon} alt="" className='next-ico' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li >
            <div className='slide'>
              <div className='user-info'>
                <img src={user1} alt="" />
                <div className='text-font'>
                  <h3>Sabona Marara</h3>
                  <span>educatio Ethiopia</span>
                </div>
              </div>
              <p>Knowledge and skills: Education equips you with knowledge in different subjects and the skills to apply that knowledge in real-world situations. This can be anything from scientific literacy to critical thinking to effective communication.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user2} alt="" />
                <div>
                  <h3>Gadisa Abara</h3>
                  <span>educatio Ethiopia</span>
                </div>
              </div>
              <p>Knowledge and skills: Education equips you with knowledge in different subjects and the skills to apply that knowledge in real-world situations. This can be anything from scientific literacy to critical thinking to effective communication.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt="" />
                <div>
                  <h3>Rata Shibashi</h3>
                  <span>educatio Ethiopia</span>
                </div>
              </div>
              <p>Knowledge and skills: Education equips you with knowledge in different subjects and the skills to apply that knowledge in real-world situations. This can be anything from scientific literacy to critical thinking to effective communication.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user4} alt="" />
                <div>
                  <h3>Etafa Tarikuu</h3>
                  <span>educatio Ethiopia</span>
                </div>
              </div>
              <p>Knowledge and skills: Education equips you with knowledge in different subjects and the skills to apply that knowledge in real-world situations. This can be anything from scientific literacy to critical thinking to effective communication.</p>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Testmonials


