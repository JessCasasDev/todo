import { Fragment } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  return (
    <Card className={styles.meals}>
      <ul>
        {props.meals.map((meal, i) => (
          <MealItem key={i} item={meal} />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
