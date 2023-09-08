import React from "react"
import {FaInstagramSquare,FaTwitterSquare} from "react-icons/fa"
function Newsletter() {
    return (
        <div className="newsletter">
            <div className="newsletter-container container">
                <div className="newsletter-wrapper">
                    <p className="blue-text">NEWSLETTER</p>
                    <h3>Subscribe to stay
in touch</h3>
<p>You can subscribe at anytime by clicking the unsubscribe button at the end of any newsletter.</p>
<div className="form-col">
    <form className="form">
        <input type="email" className="email" id="email" placeholder="Enter Your Email"required/>
        <input type="submit" className="submit" value="Submit"/>
    </form>
</div>
<div className="social-col">
<div className="social-icons"><FaInstagramSquare className="icons insta"/> INSTAGRAM</div>
<div className="social-icons"><FaTwitterSquare className="icons tweet"/> TWITTER</div>
</div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter