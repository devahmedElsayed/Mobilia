import React from 'react';
import productList from './path/to/productList';
import { IoIosAddCircle } from "react-icons/io";

const Sug = () => {
    return (
        <div>
            <ul>
                {productList.map(product => (
                    <li key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button>Add To Cart  <IoIosAddCircle /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sug;
