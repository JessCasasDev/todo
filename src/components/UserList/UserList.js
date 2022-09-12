import Card from "../UI/Card";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      {props.usersList.map((user, i) => (
        <User user={user.name} age={user.age} key={i} />
      ))}
    </Card>
  );
};

export default UserList;
