import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = ()=> {
  console.log('app')
  const [displayCart, setDisplayCart] = useState(false);

  const displayCartHandler = () => {
    setDisplayCart(true);
  };

  const hideCartHandler = () => {
    setDisplayCart(false);
  };

  const orderClickHandler = () => {
    console.log("ordering");
    setDisplayCart(false);
  };

  return (
    <CartProvider>
      {displayCart && (
        <Cart onCloseCart={hideCartHandler} onOrderCart={orderClickHandler} />
      )}
      <Header onShowCart={displayCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
