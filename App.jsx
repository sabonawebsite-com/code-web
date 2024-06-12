// import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testmonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  // const [play, setPlay] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="contener">
        <Title subTitle='Our programs' title='What We offers' />
        <Programs />
        {/* <About setPlay={setPlay} /> */}
        <About />
        <Title subTitle='Our Gallery' title='Campus photos' />
        <Campus />
        <Title subTitle='Testmonalis' title='What students says !' />
        <Testmonials />
        <Title subTitle='contact us' title='Get in touch !' />
        <Contact />
        <Footer />
      </div>
      {/* <VideoPlayer /> */}
    </div>
  )
}

export default App