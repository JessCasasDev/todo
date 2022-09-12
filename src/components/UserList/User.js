import styles from "./User.module.css";
const User = (props) => {
  return (
    <div className={styles.user}>
      {props.user} -{props.age}
    </div>
  );
};

export default User;
