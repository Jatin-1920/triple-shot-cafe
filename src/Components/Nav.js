import React,{useState} from "react";
import { Link } from "react-router-dom";
import {FaCartArrowDown,FaBars,FaTimesCircle} from "react-icons/fa"
import Order from "./Order";
function Nav(data) {

    const [nav,setNav] =  useState(true)
    const [menu,setMenu] = useState(true)
    return (
      <>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
          <img
            src="https://assets.website-files.com/6435285ed29de434162c3676/64353ebfa77e8461f143ca3c_logo.svg"
            loading="lazy"
            className="logo-img"
          />
          </Link>
        </div>
   <div className="menu-bar" onClick={()=>{
    setMenu(!menu)
   }}>
    <div className="top-line"></div>
    <div className="bottom-line"></div>
   </div>
        <div className={menu ? "middle-nav" :"middle-nav open"}>
          <FaTimesCircle className="fa-times" onClick={()=>{
    setMenu(!menu)
   }}/>
          <a className="link" href="#product">
            <li>Our Products</li>
          </a>
          <a className="link" href="#process">
            <li>Process</li>
          </a>
          <a className="link" href="#testimonials">
            <li>What people say</li>
          </a>
          <a className="link" href="#story">
            <li>Our Story</li>
          </a>
        </div>
        <div className="right-nav">
            <div className="cart-nav" onClick={()=>{
              setNav(!nav)
            }}>
<FaCartArrowDown/>
<p>My Cart</p>
            </div>
            <div className="contact-link">
                <Link>Contact Us</Link>
            </div>
        </div>
      </nav>
        <div className={nav ? "bglay" : "bglay overlay" } onClick={()=>{
              setNav(!nav)
            }}></div>
      <div className={nav ? "order-section" :"order-section open"}>
<div className="order-heading">
  <h2>YOUR CART</h2>
  <div className="close" onClick={()=>{
              setNav(!nav)
            }}><FaTimesCircle/></div>
</div>
<Order coffee={data.coffee} Order={data.Order} increment={data.increment} decrement={data.decrement} delete={data.delete}/>
      </div>
      </>
    );
  
}
export default Nav;
