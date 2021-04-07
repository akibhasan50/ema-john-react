import React,{useState} from 'react'
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

export default function Shop() {
    const first10 =fakeData.slice(0,10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])
    const handelAddToCart = (product)=>{
     
        const newCart = [...cart,product]
        setCart(newCart)
        console.log(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                
                            {
                                    products.map( pd => (
                                        <Product handelAddToCart={handelAddToCart} product={pd}></Product>
                                    ))
                                }
            </div>
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div>
         
          
        </div>
    )
}
