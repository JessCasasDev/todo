import { useState } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [quantity, setQuantity] = useState(0);

  const quantityChangeHandler = (event) => {
    setQuantity(+event.target.value);
  };

  const addItemToCartHandler = (event) => {
    event.preventDefault();
    props.onQuantityChange(quantity);
  };

  return (
    <form className={styles.form} onSubmit={addItemToCartHandler}>
      <Input
        input={{
          name: "quantity",
          type: "number",
          label: "Amount",
          min: "1",
          max: "10",
          step: "1",
          value: quantity,
          onChange: quantityChangeHandler,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
