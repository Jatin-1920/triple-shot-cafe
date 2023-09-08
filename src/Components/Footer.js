import React from "react";
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer-container container">
                <div className="footer-top">
                    <h2>Quality coffee sourced globally.</h2>
                    <Link className="blue-button" to="/">
                  <div>Contact Us</div>
                  <div className="arrow-right">
                    <FaArrowRight className="arrow" />
                  </div>
                </Link>
                </div>
                <div className="footer-bottom">
                    <img src="https://assets.website-files.com/6435285ed29de434162c3676/6437a450d27d278dfa2fc3d6_footer-logo.png" className="footer-logo logo"/>
                    <div className="footer-links">
                        <Link to="/" className="ft-lnks">Terms and Conditions</Link>
                        <Link to="/" className="ft-lnks">Privacy Policy</Link>
                        <p className="ft-lnks">©Triple Shot Cafe 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;