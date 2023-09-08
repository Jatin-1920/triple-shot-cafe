import React from "react";
import { FaArrowRight,FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";
import Process from "./Process";
import OurStory from "./OurStory";
import Product from "./product";
import Newsletter from "./newsletter";
import Footer from "./Footer";
class Home extends React.Component {
  render() {
    return (
      <>
        <div className="banner">
          <div className="container banner-content">
            <div className="banner-content">
              <h1>Experience the Perfect Trio of Coffee</h1>
              <div className="banner-center">
                <p>
                  Discover our hand-picked collection of three exquisite
                  coffees, roasted to perfection for a rich, flavorful taste.
                </p>
                <a className="blue-button" href="#product">
                  <div>See Our Products</div>
                  <div className="arrow-right">
                    <FaArrowRight className="arrow" />
                  </div>
                </a>
                <img
                  src="https://assets.website-files.com/6435285ed29de434162c3676/643654020469edcec5bf4917_banner-coffe-bag.png"
                  loading="lazy"
                />
              </div>
            </div>
            <img
              className="coffee-cup"
              src="https://assets.website-files.com/6435285ed29de434162c3676/643655c6eeb7e3911414798d_banner-cup.png"
              loading="lazy"
            />
            <img
              className="donut"
              src="https://assets.website-files.com/6435285ed29de434162c3676/64365894702aadfed148500e_banner-donut.png"
              loading="lazy"
            />
            <img
              className="left-beans"
              src="https://assets.website-files.com/6435285ed29de434162c3676/64365978ec53b3307fe501e4_banner-coffee-beans-left.png"
              loading="lazy"
            />
            <img
              className="right-beans"
              src="https://assets.website-files.com/6435285ed29de434162c3676/643659aa2066867a00ed0ea5_banner-coffee-beans-right.png"
              loading="lazy"
            />
          </div>

          <img
            className="left-leaf"
            src="https://assets.website-files.com/6435285ed29de434162c3676/643656f3ec53b33614e4cc6c_banner-leaf-left.png"
            loading="lazy"
          />

          <img
            className="right-leaf"
            src="https://assets.website-files.com/6435285ed29de434162c3676/643654dec8c206b4e4879639_leaf-right.png"
            loading="lazy"
          />
        </div>
        <div className="quote-section">
          <div className="quote-wrapper">
            <div className="quote-heading">
              <em>
                “Coffee is a lot more than just a drink; it's something
                happening. Not as in hip, but like an event, a place to be, but
                not like a location, but like somewhere within yourself.”
              </em>
            </div>
            <div className="quote-author blue-text">- Gertrude Stein</div>
          </div>
          <div className="quote-char">
            <img
              src="https://assets.website-files.com/6435285ed29de434162c3676/64366456c15bb687432d10a1_character-strolling.png"
              loading="lazy"
              alt=""
              className="character-image"
            />
            <img
              src="https://assets.website-files.com/6435285ed29de434162c3676/643664567d5603a4c7e88c68_character-cup.png"
              loading="lazy"
              alt=""
              className="character-image"
            />
            <img
              src="https://assets.website-files.com/6435285ed29de434162c3676/64366456f8cdeb06dc40a8fa_character-reading.png"
              loading="lazy"
              alt=""
              className="character-image"
            />
          </div>
          <div className="products-block" id="product">
            <div className="product-wrapper">
              <div className="product-list-items">
                {this.props.coffee.map((data, key) => (
                  <Product
                    key={key}
                    index={key}
                    coffee={data}
                    addToOrder={this.props.addToOrder}
                  />
                ))}
              </div>
              <img
                className="product-beans"
                src="https://assets.website-files.com/6435285ed29de434162c3676/643e3e6d8d156051940f34e6_product-box-beans.png"
              />
            </div>
          </div>
        </div>
        <Process />
        <div className="testimonials" id="testimonials">
          <div className="testi-wrapper">
            <p className="blue-text">WHAT CUSTOMERS SAY</p>
            <h3>WHY WE'RE DIFFERENT</h3>
            <div className="review-col">
              <FaLongArrowAltLeft className="long-left arrows"/>
              <FaLongArrowAltRight className="long-right arrows"/>
              <h1>
               <em>
               "This coffee place has a cozy atmosphere and great coffee. The baristas are friendly and knowledgeable about their craft. Highly recommend their cappuccinos."
               </em>
              </h1>
              <p>Jatin Yadav</p>
            </div>
          </div>
        </div>
        <OurStory />
        <Newsletter />
        <Footer />
      </>
    );
  }
}

export default Home;
