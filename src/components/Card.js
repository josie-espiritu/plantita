import React, { useContext } from 'react'
import '../stylesheets/card.css'
import rubberp from '../assets/rubber plant.png'
import { ShopContext } from '../providers/ShopProvider'

const Card = (props) => {

  const {id, productName, price,description, productImage} = props.data
  const {addToCart,cartItems} = useContext(ShopContext)
  const cartItemAmnt = cartItems[id]

  return (
    <div className='productCard' key={id}>
      <img src={productImage} alt=""  className='p-img'/>
      <h3>{productName}</h3>
      <p className='p-price'>${price}</p>
      <p className='desc-display'>{description}</p>
      <button className='btn-add-to-cart' 
        onClick={()=>addToCart(id)}
      >ADD TO CART {cartItemAmnt > 0 && <>({cartItemAmnt})</>}</button>
    </div>
  )
}

export default Card
