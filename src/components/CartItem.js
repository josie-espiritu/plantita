import React, { useContext } from 'react'
import '../stylesheets/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from '../providers/ShopProvider'


const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data
    const {cartItems, removeFromCart,addToCart} = useContext(ShopContext)
    const cartItemAmnt = cartItems[id]

  return (
    <div className='cart-item' key={id}>
      <div><img src={productImage} alt=""/></div>
      
      <div className='desc-div'>
        <div>
            <h3 className='cart-h3'>{productName}</h3>
            <p>${price}</p>
        </div>
        <div className='q-div'><button className='q-btn minus' onClick={()=>{removeFromCart(id)}}><FontAwesomeIcon icon={faMinus}/></button><div className='q-input '>  {cartItemAmnt > 0 && <>{cartItemAmnt}</>}</div><button className='q-btn add' onClick={()=>{addToCart(id)}}><FontAwesomeIcon icon={faPlus}/></button></div>
      </div>

    </div>
  )
}

export default CartItem
