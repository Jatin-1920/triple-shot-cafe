import React from "react"
import { useParams } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa"
import { useState } from "react"
import Newsletter from "./newsletter"
import Footer from "./Footer"
function Details({coffee,addToOrder}) {
const [expand,setExpand] = useState(true)
    const {productId} = useParams()
    const thisProduct = coffee.find(product => product.name===productId)
 const {name,price,desc,img,id,ingredient,policy,note} = thisProduct;
 const handleClick = ()=>{
    addToOrder(id)
    }
    return (
        <>
       <div className="details-section">
        <div className="dtl-img">
            <img src={img}/>
        </div>
        <div className="details-content">
            <div className="details-top">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
            <div className="details-bottom">
             <div className="details-bottom-top">
             <div className="dtls-price">${price}</div>
            <a className="blue-button add-to-cart"  onClick={handleClick}>
                                <div className="add-flex">Add To Cart</div>
                                <div className="arrow-right">
                                <FaCartPlus className="arrow"/>
                                </div>
                            </a>
             </div>
                            <div className="accordion-col">
                                <div className="accordion-wrapper">
                                    <div className="accordion-question">
                                        <h2>Ingredients</h2>
                                        <span className="expnd-acrd"></span>
                                    </div>
                                    <div className="accordion-answer">
                                        {ingredient}
                                    </div>
                                </div>
                                <div className="accordion-wrapper">
                                    <div className="accordion-question">
                                        <h2>Important Note</h2>
                                        <span className="expnd-acrd" onClick={()=>{
                                            setExpand(!expand)
                                        }}></span>
                                    </div>
                                    <div className="accordion-answer">
                                        {note}
                                    </div>
                                </div>
                                <div className="accordion-wrapper">
                                    <div className="accordion-question">
                                        <h2>Shipping Policy</h2>
                                        <span className="expnd-acrd" onClick={()=>{
                                            setExpand(!expand)
                                        }}></span>
                                    </div>
                                    <div className="accordion-answer">
                                        {policy}
                                    </div>
                                </div>
                            </div>
            </div>
        </div>
       </div>
       <Newsletter />
       <Footer />
        </>
    )
}
export default Details