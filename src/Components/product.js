import React from "react";
import {FaCartPlus} from "react-icons/fa"
import { Link } from "react-router-dom";
function Product(data) {
   
        const {name,img,desc,price,id} = data.coffee;
      return ( 
        <div className="product-list" >
        <div className="product-content">
            <div className="product-top">
                <img src={img}/>
                <div className="top-heading">
                    <h4>{name}</h4>
                </div>
            </div>
            <p className="product-desc">{desc}</p>
            <div className="product-price-wrapper">
                <h4 className="price">PRICE ${price}</h4>
        <Link to={`/products/${name}`} key={name}>
                <a className="blue-button add-to-cart" href="#product" >
                                <div className="add-flex">Order Now</div>
                                <div className="arrow-right">
                                <FaCartPlus className="arrow"/>
                                </div>
                            </a>
    </Link>

            </div>
        </div>
    </div>
      )
    }


export default Product;
