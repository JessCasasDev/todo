import styles from "./Header.module.css";
import image from "../../resources/meals.jpg";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img className={styles.image} src={image} />
      </div>
    </React.Fragment>
  );
};

export default Header;
