import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log("you decreased amount");
  }
  if (action.type === INCREASE) {
    console.log("you increased amount");
  }
  if (action.type === REMOVE) {
    console.log("you removed amount");
    console.log(action.payload.id);
  }

  return state;
}
//NOTE:2. defining initial state and reducer function

export default reducer;
