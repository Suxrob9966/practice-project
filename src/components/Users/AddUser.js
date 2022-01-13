import React from "react";
import Card from "../UI/Card";
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const goalInputChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={goalInputChangeHandler} />
        <label htmlFor="age">User Age</label>
        <input
          id="age"
          type="number"
          min="1"
          onChange={goalInputChangeHandler}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
