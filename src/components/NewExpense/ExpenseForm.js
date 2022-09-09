import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title,
      date: new Date(date),
      amount,
    };

    setTitle("");
    setAmount("");
    setDate("");

    props.onExpenseSubmitted(newExpense);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input name="title" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.onCancelHandler}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
