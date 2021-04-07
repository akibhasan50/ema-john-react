import React from "react";
import "./Product.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons'

export default function Product({ product,handelAddToCart }) {
 

  return (
    <div className="product">
      <div>
        <img src={product.img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{product.name}</h4>
        <br />
        <p>
          <small>by: {product.seller}</small>
        </p>
        <p>${product.price}</p>
        <p>
          <small>Only {product.stock} left in stock - Order soon</small>
        </p>
       <button onClick={() =>handelAddToCart(product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart } />Add to cart</button>
      </div>
    </div>
  );
}
