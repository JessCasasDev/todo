import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (quantity) => {
    cartCtx.addItem({ ...props.item, quantity });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={styles.description}>{props.item.description}</div>
        <span className={styles.prices}>{props.item.price}</span>
      </div>
      <div>
        <MealItemForm
          item={props.item}
          onQuantityChange={addItemToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
