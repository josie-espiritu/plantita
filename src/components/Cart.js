import React, { useContext, useState } from 'react'
import Section from './Section'
import '../stylesheets/products.css'
import { PRODUCTS } from '../list'
import { ShopContext} from '../providers/ShopProvider'
import CartItem from './CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX , faSeedling} from '@fortawesome/free-solid-svg-icons'


const Cart = () => {

  const {cartItems, getTotalAmnt, checkOut } = useContext(ShopContext)
  const totalItems = Object.values(cartItems).reduce((sum,quantity)=>sum +quantity)
  const totalAmnt  = getTotalAmnt()

  const [isOpenModal, setIsOpenModal] = useState(false) 

  return (
    <section style={{minHeight: '80vh'}}>
      <div  className='container'>
        <h1 className='p-h1' >Your Cart</h1>
        
        <div className='cart-items'></div>

        <div className='cart-grid'>
          {PRODUCTS.map((product)=> {
            if (cartItems[product.id] !== 0){
              return <CartItem data = {product} key={product.id}/>
            }
          }) }
        </div>

        {totalItems > 0 ? 
        <>
         <hr  style={{marginTop: '30px'}}/>
          <div className='checkout-div'>
          <div style={{textAlign: 'right'}}>
             <p>Total Items:{totalItems}</p>
             <p>Subtotal: ${totalAmnt}</p>
          </div>
          <button className='checkout-btn' onClick={()=>{
            {console.log('pota')}
            setIsOpenModal(true)
            
            }}>Checkout</button>
  
          </div>
        </>
        : <div style={{textAlign: 'center'}}> Your cart is empty. Please go to our Products to find your plant :)</div>}




              {isOpenModal && (
                <div onClick={()=>{setIsOpenModal(false)
                   checkOut()}} className='modal-overlay'>
                  <div onClick={()=>{setIsOpenModal(false)
                    checkOut()
                  }}
                  className='modal-content'>
                    <div className='modal-icon'><FontAwesomeIcon icon={faSeedling} size='4x'/></div>
                    
                    <h2>Thank you for your support!</h2>
                     <p>Total Items:{totalItems}</p>
                     <p>Subtotal: ${totalAmnt}</p>
                     <button className='go-back-btn' onClick={()=>checkOut()}>Go Back</button>

                     <FontAwesomeIcon icon={faX}  className='close-icon'
                      onClick={()=>checkOut()}/>
                </div>
                </div>
            )}

      </div>
    </section>
  )
}

export default Cart
