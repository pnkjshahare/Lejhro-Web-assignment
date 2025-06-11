import React from 'react'
import Navbar from '../compoents/Navbar'
import HeroPage from '../compoents/HeroPage'
import Footer from '../compoents/Footer'
const Home = () => {
  return (
    <>
    <div>
        <Navbar color='#d6932c' name="Blogs"/>
        <HeroPage/>
        <Footer/>
    </div>
    </>
  )
}

export default Home