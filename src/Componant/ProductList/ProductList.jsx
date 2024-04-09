import React from 'react'
import './ProductList.css'
import productList from '../DataProudct/Proudct'
import Prod from './Prod'
const ProductList = () => {
  const myProd = productList.map((furiList)=>{
    return(
      <Prod prodInfo={furiList}/>
    )
  })
  return (
    <section className='product'>

      <div className='prod_head'>
      <h2 className='headShop'> Shop</h2>

      </div>
     <div className='myBoxProd '>
       {myProd}

     </div>
      

    </section>
  )
}

export default ProductList