import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
//NOTE:0
import { CLEAR_CART } from "../actions";

const CartContainer = ({ cart = [], total, dispatch }) => {
  // console.log(dispatch);
  //NOTE: 3. export default connect(mapStateToProps)(CartContainer);     just by this we connected dispatch function to our component

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} probe='random text' />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          {/* //NOTE:now we can use the dispatch function */}
          clear cart
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  return { cart: store.cart, total: store.total };
  //NOTE: 2. here we don't even return dispatch function and still we have an access to it in our component
}

export default connect(mapStateToProps)(CartContainer);
//NOTE:1. mapStateToProps not only passing the state but dispatch function also
