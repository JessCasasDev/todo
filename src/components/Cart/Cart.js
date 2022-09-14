import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const total = new Number(cartCtx.totalAmount).toFixed(2);

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={styles["cart-items"]}>
        {cartCtx.items.map((value) => (
          <CartItem
            id={value.id}
            price={value.price}
            amount={value.quantity}
            onRemove={cartRemoveHandler.bind(null, value.id)}
            onAdd={cartAddHandler.bind(null, value)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={styles.button} onClick={props.onOrderCart}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
