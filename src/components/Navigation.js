import React, { useContext, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import Cart from './Cart';
import Products from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSeedling , faBars} from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../providers/ShopProvider';


const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)
  const {cartItems} = useContext(ShopContext)

  const totalItems = Object.values(cartItems).reduce((sum,quantity)=>sum +quantity)

  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }

  return (
    < >
      

      <div className='nav' id='top'>
        <div className='container flex-container nav-bar'>
          <div className='logo' ><Link to='/#top'>PLANTITA</Link></div>

          <div>

            <div className="mobile-menu">
              <div className='hamburg'
                onClick={toggleMenu}

                style={{backgroundColor: isOpen ? 'white': 'transparent',
                color: isOpen ? 'black' : 'white',
                padding: '.5em'
      
    }}
              >
                <FontAwesomeIcon icon={faBars} size='2x'/>
              </div>
              {isOpen && (
                <div  className='m-container'>
                <Link to='/products' className='dflex' >Products  <FontAwesomeIcon icon={faSeedling}/></Link>
                <Link to='/cart' className='dflex'>Cart  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>{totalItems}</span>
                </Link>
                </div>
              )}
            </div>



            <div className='desktop-menu'>
              <Link to='/products' >Products  <FontAwesomeIcon icon={faSeedling}/></Link>
              <Link to='/cart' className='dflex'>Cart  <FontAwesomeIcon icon={faShoppingCart} />
                <span>{totalItems}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </>
  )
}

export default Navigation
