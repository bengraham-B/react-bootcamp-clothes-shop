import React from 'react'
import './product.css'







export default function Product(props) {

  return (
    <div className="product-container ">
        <di className="img-container container">
            <img className="img" src={props.img} alt="" srcset="" />
        </di>

        <div className="description container">
            <p className="title-text">{props.title}</p>
        </div>
       
        <div className="description container">
            <p className="description-text">{props.description}</p>
        </div>

        <div className="price container">
            <p className="price-text">{props.price}</p>
        </div>

        <div className="button-container container">
            <button className="buy-button">Buy</button>
        </div>
    </div>
  )
}
