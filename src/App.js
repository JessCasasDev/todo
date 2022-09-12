import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/User/UserForm";
import UserList from "./components/UserList/UserList";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const userSubmitHandler = (event) => {
    setUserList((prevVal) => {
      return [...prevVal, event];
    });
  };

  return (
    <>
      <UserForm onSubmit={userSubmitHandler} />
      {userList.length > 0 && <UserList usersList={userList} />}
    </>
  );
}

export default App;
