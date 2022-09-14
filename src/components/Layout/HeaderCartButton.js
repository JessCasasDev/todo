import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const cartItems = items.reduce(
    (currentNumber, item) => item.quantity + currentNumber,
    0
  );
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnimation(true);

    const timeout = setTimeout(() => {
      setAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [items]);

  const btnClasses = `${styles.button} ${animation ? styles.bump : ""}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      <span> Your Cart</span>
      <span className={styles.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
