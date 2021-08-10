import React from "react";
import { connect } from "react-redux";
//NOTE:5. importing connect function
const Navbar = ({ amount }) => {
  //NOTE: 9. now here have an access to our amount property
  return (
    <nav>
      <div className='nav-center'>
        <h3>ReduxGear</h3>
        <div className='nav-container'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
            {/* //NOTE:now we can use this argument */}
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  //NOTE: 6. we creating the function with the same name as we calling it in connect
  // console.log(state);
  //NOTE: 7. here we will get a log of our current state
  return { amount: state.amount };
  //NOTE: 8. here we decide what part of our state we are going to use in Navbar component.Not necessary to return whole state if component doesn't use it whole. Without returning there will be a warning
};
export default connect(mapStateToProps)(Navbar);
//NOTE: we attach state to navbar while exporting navbar
