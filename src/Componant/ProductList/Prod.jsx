import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import productList from '../DataProudct/Proudct';

const Prod = ({prodInfo}) => {
  const {addToCart} = useContext(CartContext);

  const params = useParams();
    const Item = productList.find((prodItems)=>{
        return(
            prodItems.id === params.id
        )
    })
  return (
    <div>
        <div className='BoxProud '>
        <div className='imgprod'>
          <img src={prodInfo.img} alt="" />
        </div>
        <div className='name'>
          <h2>{prodInfo.name}</h2>
        </div>
        <div className='price'>
            <p>${prodInfo.price}</p>
        </div>
        <div className='add'>
            <button onClick={() => addToCart({...prodInfo , quantity:1})}>{prodInfo.add}</button>
            <button> <Link to={`/ProudctDetails/${prodInfo.id}`}>{prodInfo.view}</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Prod