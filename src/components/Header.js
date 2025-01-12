import React from 'react'
import headerImg from '../assets/header-bg.png'
import { Route,Routes, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='container' >
        <h1 >PLANTITA</h1>
        <p>Transform your space into a lush oasis with our vibrant selection of indoor potted plants, delivered right to your door!</p>
        <div className='cta-btn'><Link to='/products'>Order Now</Link></div>
      </div>

      
    </>
  )
}

export default Header
