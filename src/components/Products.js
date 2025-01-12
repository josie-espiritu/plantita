import React from 'react'
import '../stylesheets/products.css'
import { PRODUCTS } from '../list'
import Card from './Card'

const Products = () => {
  return (
    <section >
      <div className='container' id='products'>
        <h1 className='p-h1' >Products</h1>
  
       <div className='ggrid'>
         {PRODUCTS.map((product)=>
          (<Card data= {product} key={product.id}/>
          ))} 
    
       </div>
  
        {/* <Card/> */}
  
  
      </div>
    </section>
  )
}

export default Products
