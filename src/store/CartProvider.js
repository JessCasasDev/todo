import { useReducer } from "react";
import CartContext from "./cart-context";

const DEFAULT_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log("cartRed", state, action);
  if (action.type === "ADD_ITEM") {
    const existingItem = state.items.findIndex(
      (item) => item.id === action.value.id
    );

    if (existingItem > -1) {
      const items = [...state.items];
      items[existingItem].quantity =
        items[existingItem].quantity + action.value.quantity;

      const totalAmount =
        state.totalAmount + action.value.quantity * action.value.price;

      return { ...state, items, totalAmount };
    } else {
      const items = [...state.items, action.value];
      const totalAmount =
        state.totalAmount + action.value.quantity * action.value.price;
      return { ...state, items, totalAmount };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const elementIndex = [...state.items].findIndex(
      (item) => item.id === action.value
    );
    let items = [];
    const newItems = [...state.items];
    const element = newItems[elementIndex];

    if (elementIndex > -1) {
      if (newItems[elementIndex].quantity === 1) {
        items = newItems.filter((item) => item.id !== action.value);
      } else {
        newItems[elementIndex] = { ...element, quantity: element.quantity - 1 };
        items = [...newItems];
      }
    }
    const totalAmount = state.totalAmount - element.price;

    return { ...state, items, totalAmount };
  }

  return DEFAULT_CART_STATE;
};

const CartProvider = (props) => {
  console.log("cartprovider");
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    DEFAULT_CART_STATE
  );

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", value: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", value: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
