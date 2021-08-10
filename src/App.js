import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
//NOTE: 1. importing functional from redux
import reducer from "./reducer";
import { Provider } from "react-redux";
//NOTE: 2. importing Provider

const initialStore = { cart: cartItems, total: 0, amount: 105 };

const store = createStore(reducer, initialStore);
//NOTE: we create our state or store

function App() {
  // cart setup

  return (
    <Provider store={store}>
      {/* //NOTE: 3. wrapping our components with the provider. and passing state to other componentns. We could do this  in index.js by wrapping whole app as well */}
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
