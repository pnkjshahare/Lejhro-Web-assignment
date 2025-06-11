import React from 'react'
import Navbar from '../compoents/Navbar'
import ourPurpose from '../../public/ourPurpose.png'
import ceo from '../../public/ceo.png'
import vision from '../../public/vision.png'
import whyjoinus from '../../public/whyjoinus.png'
import email from '../../public/email.png'
const About = () => {
  return (
    <>
    <Navbar color="#2c7fbf" name="About Us"></Navbar>
    <div>
        <img src={ourPurpose} alt="" />
    </div>
     <div >
        <img src={ceo} alt="" />
    </div>
    <div className='bg-white mt-10'>
        <img src={vision} alt="" />
    </div>
    <div>
        <img src={whyjoinus} alt="" />
         <a href="mailto:hr@lejhro.com">
        <img src={email} alt="" />
    </a>
    </div>
    </>
  )
}

export default About