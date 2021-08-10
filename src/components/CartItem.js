import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../actions";

const CartItem = ({ img, title, price, amount, remove }) => {
  return (
    <div className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </div>
  );
};
const mapDisplatchToProps = (dispatch, ownProps) => {
  console.log(dispatch);

  console.log(ownProps);
  //NOTE: here ownProps are equal to props that we passed in CartContainer:  return <CartItem key={item.id} {...item} probe='random text' />;

  // console.log(ownProps);
  const { id } = ownProps;
  // console.log(id);

  //NOTE: ownProps = { img, title, price, amount, id} for every item
  return { remove: () => dispatch({ type: REMOVE, payload: { id } }) };
};

export default connect(null, mapDisplatchToProps)(CartItem);
//NOTE: so here we replace our mapStateToProps with null because we don't need any data from our redux state
