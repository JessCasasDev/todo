import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState();

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!name.trim().length) {
      setError({ title: "Invalid Name", message: "Please enter a name" });
      return;
    }

    props.onSubmit({ age, name });

    setAge(0);
    setName("");
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const confirmHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      {!error && (
        <Card className={styles.input}>
          <form onSubmit={submitFormHandler}>
            <label htmlFor="user">User</label>
            <input
              name="user"
              type="text"
              value={name}
              onChange={nameChangeHandler}
            />
            <label htmlFor="age">Age</label>
            <input
              name="age"
              type="number"
              min="0"
              max="150"
              value={age}
              onChange={ageChangeHandler}
            />
            <Button type={"submit"}>Submit</Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default UserForm;
