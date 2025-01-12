import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import '../App.css';

const Footer = () => {

  const location = useLocation()

  const handleClick = () =>{
    if(location.pathname === '/'){
      window.scrollTo({top:0, behavior: 'smooth'})
    }
  }

  return (
    <section className='footer'>
      <div className='container footer-container'>
      <div className='logo'><Link to='/#top' onClick={handleClick} style={{
        color: 'white',
        textDecoration: 'none'
      }}> PLANTITA</Link></div>
      <em>Plantita E-Commerce © 2024</em>
      </div>
    </section>
  )
}

export default Footer
