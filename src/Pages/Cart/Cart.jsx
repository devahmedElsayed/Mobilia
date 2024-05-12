import React, { useContext } from 'react'
import './Cart.css'
import { CiSquareRemove } from "react-icons/ci";
import CartContext from '../../Context/CartContext';


const Cart = () => {
    const { cartItems , addToCart , removeFromCart , } = useContext(CartContext)
    const totalPrice = cartItems.reduce((acc,cur) => acc + cur.price * cur.quantity , 0);
    
  return (
    <div className="cart">
        <div className="cart-title">
            Your Shopping Cart
        </div>
        <div className="cart-Wrapper">
            <div className="cart-items">
            {cartItems.map(item=>
                <div key={item.id} className='cart-item'>
                        <img src={item.img } alt="" className="cart-img" />
                        <div className="cart-info">
                            <div>
                            <div className="item-name">
                                <b>Product Name : {item.name}</b>
                            </div>
                            <div className="item-details">
                            <b>Product Details : {item.details}</b>
                            </div>
                            </div>
                           <div>
                           <div className="cart-quntity">
                            <button 
                            disabled={item.quantity <= 1}
                            onClick={()=> addToCart({...item, quantity: item.quantity - 1})}>-</button>
                            <b>{item.quantity}</b>

                                <button onClick={()=> addToCart({...item, quantity: item.quantity + 1})}>+</button>
                                
                                </div>
                                <div className='price-item'>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    <p className='removeIcone' ><CiSquareRemove onClick={() => removeFromCart(item.id)} /></p>

                            </div>
                           </div>
                           
                        </div>
                        
                </div>
                )}
            </div>
            <div className="order-Summary">
                <div className="order-title">
                    ORDER SUMMARY
                </div>
                <div className='order-item'>
                    <span>Subtotal</span>
                    <span>
                        ${totalPrice}
                    </span>
                </div>
                <div className='order-item'>
                    <span>Shopping Cart</span>
                    <span>
                        0
                    </span>
                </div>
                <div className='order-item'>
                    <span>Discount</span>
                    <span>
                        0
                    </span>
                </div>
                <div className='order-item'>
                    <span>Total</span>
                    <span>
                        ${totalPrice}
                    </span>
                </div>
        </div>
        </div>
        
    </div>
  )
}

export default Cart