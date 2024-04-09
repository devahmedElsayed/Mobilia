import React, { useContext, useState } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import productList from '../DataProudct/Proudct';
import { FaOpencart } from "react-icons/fa";
import CartContext from '../../Context/CartContext';

const ProductDetails = () => {
    
    const { addToCart } = useContext(CartContext);

    const params = useParams();
    const item = productList.find(prodItem => prodItem.id === params.id);

    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        addToCart({ ...item, quantity: qty });
    };

    return (
        <section className='prodDetails'>
            <div className='imgD'>
                <img src={item.img} alt="pic" />
            </div>
            <div className='infoD'>
                <span className='nameD'>Name: {item.name}</span>
                <hr />
                <span className='priceD'>Price: ${item.price}</span>
                <input
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(parseInt(e.target.value))}
                    className='D_input'
                />
                <button onClick={handleAddToCart}> Add To Cart  <FaOpencart /></button>
            </div>
        </section>
    );
}

export default ProductDetails;
