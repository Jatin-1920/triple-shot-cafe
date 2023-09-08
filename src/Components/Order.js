import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Order extends React.Component {
  displayOrder = (key) => {
    const coffee = this.props.coffee[key]
    const count = this.props.Order[key]
    const { name, price, img } = coffee
   
    return (
      <CSSTransition
        key={key}
        classNames="animed"
        timeout={{ enter: 0, exit: 1000 }}
      >
        <div className="cart-column">
          <img src={img} />
          <div className="middle-cart">
            <div className="cart-name">{name}</div>
              <div className="cart-price">${count * price}</div>
          </div>
          <div className="right-cart">
            <div className="qty-cart">
              <button
                className="decrement"
                onClick={() => {
                  this.props.decrement(key);
                }}
              >
                -
              </button>
              <div className="qty">{count}</div>
              <button
                className="increment"
                onClick={() => {
                  this.props.increment(key);
                }}
              >
                +
              </button>
            </div>
            <div
              className="remove-cart"
              onClick={() => {
                this.props.delete(key);
              }}
            >
              REMOVE
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
  render() {
    const orderIds = Object.keys(this.props.Order);
    const total = orderIds.reduce((prevTotal, key) => {
      let coffee = this.props.coffee[key];
      const count = this.props.Order[key];
      const isAvailable = coffee;
      if (isAvailable) {
        return prevTotal + coffee.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="cart-section">
        <TransitionGroup className="animed">
          {orderIds.map(this.displayOrder)}
        </TransitionGroup>
        <div className="checkout-total">
          <div className="total-money">
            <span>TOTAL :</span>
            <span>${total}</span>
          </div>
          <button className="chck-btn">CHECKOUT</button>
        </div>
      </div>
    );
  }
}

export default Order;
